# import necessary libaries
from flask import Flask , render_template , url_for , redirect , request , session , jsonify
from flask_cors import CORS
from location import *
from flights import *
from places import *
from itinerary import *
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from flask_bcrypt import Bcrypt

# intializing app in python
server = Flask(__name__,static_folder='./build' ,static_url_path='/')
DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'
engine = create_engine( DB_URL )
connection = engine.connect( )
server.config[ 'SQLALCHEMY_DATABASE_URI' ] = DB_URL
server.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS' ] = False
bcrypt = Bcrypt( server )
CORS( server )
#
# global connection
#
# def connect_function( ) :
#     engine = create_engine( DB_URL )
#     connection = engine.connect( )
#     server.config[ 'SQLALCHEMY_DATABASE_URI' ] = DB_URL
#     server.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS' ] = False
#     bcrypt = Bcrypt( server )
#     CORS( server )

# User registering function which posts the data
@server.route( '/users/register' , methods = [ 'POST' ] )
def register(  ) :
    # receiving the user name, email and password
    #connect_function( )

    first_name = request.get_json( force = True )[ 'name' ]
    email = request.get_json( force = True )[ 'email' ]
    # and decrypting the password
    password = request.get_json( )[ 'password' ]#.encode( 'utf-8' )
    # generating password encryption hash and decoding it from bytes to a string
    # to be stored to a database
    password_hash = bcrypt.generate_password_hash( password ).decode( 'utf-8' )
    #password_hash = bcrypt.hashpw( password , bcrypt.gensalt( ) )
    #password = bcrypt.generate_password_hash( request.get_json( )[ 'password' ] ).decode( 'utf-8' )
    # if any of the arguments are missing they failure is returned although the frontend is automatically handling it
    # its just an added safety feature
    if not ( first_name and email and password ) :
        result = { 'status' : 'Failure' }
        return jsonify( result )
    # allocating id to the user which already exists
    ids = len( connection.execute( 'SELECT * FROM users;' ).fetchall( ) )
    # adding user details to the database with encrypted database
    connection.execute( 'INSERT INTO users(id,name,username,password) VALUES(%s,%s,%s,%s);' , ( ids + 1 , first_name , email , password_hash ) )
    connection.terminate( )
    # sending a positive response to the frontend
    result = { 'status' : 'Success' }
    # returning json object
    return jsonify( result )

# user login function which gets the Credentials and verifies them
@server.route( '/users/login' , methods = [ 'POST' ] )
def login(  ) :
    # receiving the user email and password
    email = request.get_json( force = True )[ 'email' ]
    # and decrypting the password
    password = request.get_json( )[ 'password' ]
    # if any of the arguments are missing they failure is returned although the frontend is automatically handling it
    # its just an added safety feature
    if not ( email and password ) :
        result = { 'status' : 'Incomplete Credentials' }
        return jsonify( result )
    # verification that the username and password matches as the one in database
    # and getting the hash from the database and encoding it to appropriate datatype
    password_hash = connection.execute( 'SELECT * FROM users where username=(%s)' , ( email ) ).fetchall( )[ -1 ][ 3 ].encode( 'utf-8' )
    if bcrypt.check_password_hash( password_hash , password ) :
        # Success in that case
        result = { 'status' : 'Login Success' }
    else :
        # otherwise writing wrong username or password
        result = { 'status' : 'Incorrect Username or Password' }
    # returning json object
    return jsonify( result )

# city returning the attractions the client_side
@server.route( '/search' , methods = [ 'POST' ] )
def city_attractions( ) :
    # getting the input from the user
    city_name = request.get_json( force = True )[ 'city' ]
    # calling in the city object
    input_city = City( [ '' , '' , '' , '' ] )
    # initalizing the database with city name as fed in the input
    input_city.initFromDatabase( city_name )
    # returning the json object client_side wants
    return jsonify( input_city.generateExplore( ) )

# explore function for the post method
@server.route( '/explore' , methods = [ 'POST' ] )
def explore_details( ) :
    # requesting the JSON data and showing it
    requested_data = request.get_json( force = True )
    # longitude and latitude access from the server
    longitude = requested_data[ 'longitude' ]
    latitude = requested_data[ 'latitude' ]
    # intializing the places object with longitude and latitude
    places_object = Place( latitude , longitude )
    # keeping a standard 40km radius from the coordinate
    places_object.initFromAPI( 40000 )
    # returnin the json file with restaurants, attractions and hotels embedded in them
    return jsonify( { 'restaurants' : places_object.getRestaurants( ) , 'attractions' : places_object.getAttractions( ) , 'hotels' : places_object.getHotels( ) } )

@server.route( '/addToItinerary' , methods = [ 'POST' ] )
def addingDetailsToItinerary( ) :
    # requesting the JSON data and showing it
    requested_data = request.get_json( force = True )
    # itinerary details from the client side
    itinerary_object = Itinerary( ownerId = requested_data[ "userId" ] )
    itinerary_object.initFromDB( )
    itinerary_object.appendTask( requested_data[ "name" ] )
    itinerary_object.saveItinerary( )
    return itinerary_object.productJson( )

# checks whether current file is running
if __name__ == '__main__' :
    # debug = True makes it convenient by restarting the server whenever code is updated
    # default port 5000 , can pass it in the argument if we want to change it
    server.run( debug = True )
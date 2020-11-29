# import necessary libaries
from flask import Flask , render_template , url_for , redirect , request , session , jsonify
from flask_cors import CORS
from location import *
from reviews import *
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
# connection = engine.connect( )
server.config[ 'SQLALCHEMY_DATABASE_URI' ] = DB_URL
server.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS' ] = False
bcrypt = Bcrypt( server )
CORS( server )


# User registering function which posts the data
@server.route( '/users/register' , methods = [ 'POST' ] )
def register(  ) :
    # receiving the user name, email and password

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
    # building a connection
    connection = engine.connect( )
    # checking the connection if the email already exists
    if connection.execute( "SELECT * FROM users where username=(%s)" , ( email ) ).fetchall( ) :
        result = { 'status' : 'Email already exists' }
        return jsonify( result )
    # allocating id to the user which already exists
    ids = len( connection.execute( 'SELECT * FROM users;' ).fetchall( ) )
    # adding user details to the database with encrypted database
    connection.execute( 'INSERT INTO users(id,name,username,password) VALUES(%s,%s,%s,%s);' , ( ids + 1 , first_name , email , password_hash ) )
    connection.close( )
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
    connection = engine.connect( )
    retrieved_data = connection.execute( 'SELECT * FROM users where username=(%s)' , ( email ) ).fetchall( )[ -1 ]#[ 3 ].encode( 'utf-8' )
    # getting the user details to be sent to the client_side
    user_id = retrieved_data[ 0 ]
    user_name = retrieved_data[ 1 ]
    user_email = retrieved_data[ 2 ]
    password_hash = retrieved_data[ 3 ].encode( 'utf-8' )
    connection.close( )
    if bcrypt.check_password_hash( password_hash , password ) :
        # Success in that case
        result = { 'status' : 'Login Success' , "user_id" : user_id , "name" : user_name , "email" : email }
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
    itinerary_object.initFromDBinsert( )
    itinerary_object.appendTask( requested_data[ "name" ] )
    itinerary_object.saveItinerary( )
    return itinerary_object.productJson( )

@server.route( '/removeFromItinerary' , methods = [ 'POST' ] )
def removeFromItinerary( ) :
    # requesting the JSON data and showing it
    requested_data = request.get_json( force = True )
    # itinerary details from the client side
    itinerary_object = Itinerary( ownerId = requested_data[ "userId" ] )
    itinerary_object.initFromDBinsert( )
    itinerary_object.removeTask( requested_data[ "name" ] )
    itinerary_object.saveItinerary( )
    return itinerary_object.productJson( )

@server.route( '/retrieveItinerary' , methods = [ 'POST' ] )
def retrieveItinerary( ) :
    # requesting the JSON data and showing it
    requested_data = request.get_json( force = True )
    # itinerary details from the client side
    itinerary_object = Itinerary( ownerId = requested_data[ "userId" ] )
    itinerary_object.initFromDBdisplay( )
    #itinerary_object.appendTask( requested_data[ "name" ] )
    #itinerary_object.saveItinerary( )
    return itinerary_object.productJson( )

@server.route( '/flightDetails' , methods = [ 'POST' ] )
def flightDetails( ) :
    # requesting the JSON data and showing it
    requested_data = request.get_json( force = True )
    # flight details from the client side
    flights_object = Flights( startCity = requested_data[ "startCity" ] , destinationCity = requested_data[ "destinationCity" ] , startDate = requested_data[ "startDate" ] )
    # returning the json formatted flight details
    return flights_object.productJson( )

@server.route( '/gatherReview' , methods = [ 'POST' ] )
def gatherReview( ) :
    # requesting the JSON data and showing it
    requested_data = request.get_json( force = True )
    # making a review object
    review_object = Review( )
    # which will return gatherReviews for the respective key
    return review_object.gatherReviews( requested_data[ "unique_location_key" ] )

@server.route( '/postReview' , methods = [ 'POST' ] )
def postReview( ) :
    # requesting the JSON data and showing it
    requested_data = request.get_json( force = True )
    # making a review object
    review_object = Review( )
    # setting all the parameters as per input from the user
    review_object.setOwnerId( requested_data[ "owner_id" ] )
    review_object.setUniqueLocationKey( requested_data[ "unique_location_key" ] )
    review_object.setStarsOutOfFive( requested_data[ "stars_out_of_five" ] )
    review_object.setReviewHeader( requested_data[ "review_header" ] )
    review_object.setReviewBody( requested_data[ "review_body" ] )
    # returning the status
    return review_object.postReview( )

@server.route( '/postComment' , methods = [ 'POST' ] )
def postComment( ) :
    # requesting the JSON data and showing it
    requested_data = request.get_json( force = True )
    # making a itinerary object with ownerId
    review_object = Itinerary( ownerId = requested_data[ "owner_id" ] )
    # calling the database intializiation
    review_object.initFromDBdisplay( )
    # appending the user comments to the database
    review_object.appendComment( requested_data[ "commenter_id" ] , requested_data[ "comment_body" ] )
    # returning the json object
    return review_object.productJson( )

# get request to return all itineraries to the user
@server.route( '/allItineraries' , methods = [ 'GET' ] )
def allItineraries( ) :
    # building a connection with the database
    with engine.connect() as connection :
        itnerary_obj = connection.execute( "SELECT * FROM Itinerary;" ).fetchall( )
    # returning the list of dictionaries to the user.
    return jsonify( { 'Itineraries' : [ dict( row ) for row in itnerary_obj ] } )

# get request to return all itineraries to the user
@server.route( '/topPlaces' , methods = [ 'GET' ] )
def topPlaces( ) :
    # # building a connection with the database
    # with engine.connect() as connection :
    #     # making a review object
    #     review_object = Review( )
    #     locations_in_db = connection.execute( "SELECT distinct unique_location_key from reviews;" ).fetchall( )
    #     ratings , i = [ ] , 0
    #     for loc in locations_in_db :
    #         rate_list = connection.execute( "SELECT stars_out_of_five from reviews where unique_location_key = \'{}\'".format( loc[ 0 ] ) ).fetchall( )
    #         ans = [ 0 , 0 ]
    #         for elem in rate_list :
    #             ans[ 0 ] += elem[ 0 ]
    #             ans[ 1 ] += 1
    #         ratings += ( ans[ 0 ] / ans[ 1 ] , i ) ,
    #         i += 1
    #     ratings.sort( reverse = True )
    #     locations_list = [ ]
    #     for elem in ratings[ :10 ] :
    #         locations_list += locations_in_db[ elem[ 1 ] ]

    # making a place object
    place_object = Place( )
    return place_object.topPlaces( )
    # return jsonify( { "locations" : locations_list } )

# checks whether current file is running
if __name__ == '__main__' :
    # debug = True makes it convenient by restarting the server whenever code is updated
    # default port 5000 , can pass it in the argument if we want to change it
    server.run( debug = True )

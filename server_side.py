# import necessary libaries
from flask import Flask , render_template , url_for , redirect , request , session , jsonify
from flask_cors import CORS
#import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

# intializing app in python
server = Flask(__name__,static_folder='./build' ,static_url_path='/')
DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'
engine = create_engine( DB_URL )
connection = engine.connect( )
server.config[ 'SQLALCHEMY_DATABASE_URI' ] = DB_URL
server.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS' ] = False

# User registering function which posts the data
@server.route( '/users/register' , methods = [ 'POST' ] )
def register(  ) :
    # receiving the user name, email and password
    first_name = request.get_json( force = True )[ 'name' ]
    email = request.get_json( force = True )[ 'email' ]
    # and decrypting the password
    password = bcrypt.generate_password_hash( request.get_json( )[ 'password' ] ).decode( 'utf-8' )
    # if any of the arguments are missing they failure is returned although the frontend is automatically handling it
    # its just an added safety feature
    if not ( first_name and email and password ) :
        result = { 'status' : 'Failure' }
        return jsonify( result )
    # allocating id to the user which already exists
    ids = len( connection.execute( 'SELECT * FROM users;' ).fetchall( ) )
    # adding user details to the database with encrypted database
    connection.execute( 'INSERT INTO users(id,name,username,password) VALUES(%s,%s,%s,%s);' , ( ids + 1 , first_name , email , password ) )
    # sending a positive response to the frontend
    result = { 'status' : 'Success' }
    # returning json object
    return jsonify( result )

# user login function which gets the Credentials and verifies them
@server.route( '/users/login' , methods = [ 'GET' ] )
def login(  ) :
    # receiving the user email and password
    email = request.get_json( force = True )[ 'email' ]
    # and decrypting the password
    password = bcrypt.generate_password_hash( request.get_json( )[ 'password' ] ).decode( 'utf-8' )
    # if any of the arguments are missing they failure is returned although the frontend is automatically handling it
    # its just an added safety feature
    if not ( first_name and email and password ) :
        result = { 'status' : 'Incomplete Credentials' }
        return jsonify( result )
    # verification that the username and password matches as the one in database
    if connection.execute( 'SELECT * FROM users where username=(%s) AND password=(%s);' , ( email , password ) ).fetchall( )[ 0 ] :
        # Success in that case
        result = { 'status' : 'Success' }
    else :
        # otherwise writing wrong username or password
        result = { 'status' : 'Incorrect Username or Password' }
    # returning json object
    return jsonify( result )

# checks whether current file is running
if __name__ == '__main__' :
    # debug = True makes it convenient by restarting the server whenever code is updated
    # default port 5000 , can pass it in the argument if we want to change it
    server.run( debug = True )

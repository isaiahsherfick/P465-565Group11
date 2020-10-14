# importing necessary libraries
from collections import defaultdict
from flask import jsonify
from abc import abstractmethod
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

# Adding the Heroku URL
DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'
# Building a connection to the database
engine = create_engine( DB_URL )
connection = engine.connect( )

# Location Class taking in the city and state as input
class Location:

    # constructor handling no arguments fed into
    def __init__( self , city = '' , state = '' , type = '' , name = '' ) :
        self.city = city
        self.state = state
        self.type = type
        self.name = name

    # returning the city
    @abstractmethod
    def getCity( self ) :
        return self.city

    # setting the city as per input
    @abstractmethod
    def setCity( self , city = '' ) :
        self.city = city

    # returning the state
    @abstractmethod
    def getState( self ) :
        return self.state

    # setting the state as per input
    @abstractmethod
    def setState( self , state = '' ) :
        self.state = state

    # returning the type
    @abstractmethod
    def getType( self ) :
        return self.type

    # setting the type as per input
    @abstractmethod
    def setType( self , type = '' ) :
        self.type = type

    # getting the name
    @abstractmethod
    def getName( self ) :
        return self.name

    # setting the name as per input
    @abstractmethod
    def setName( self , name = '' ) :
        self.name = name

    # empty abstract function for now, will be refactored in future
    @abstractmethod
    def initFromDatabase( self ) :
        return ''


    # test case for the purpose of verification
    @abstractmethod
    def verification_Data( self , other ) :
        return self.getState( ) == other.getState( ) and \
            self.getType( ) == other.getType( ) and \
            self.getCity( ) == other.getCity( ) and \
            self.getName( ) == other.getName( )

# City class inheriting parent features
class City( Location ) :

    # constructor taking in the arguments and calling the parent class with respective input arguments
    def __init__( self , location = [ '' , '' , '' , '' ] , attractions = defaultdict( list ) ) :
        super( City , self ).__init__( location[ 0 ] , location[ 1 ] , location[ 2 ] , location[ 3 ] )
        # self.hotels = hotels
        # self.restaurants = restaurants
        # self.flights = flights
        self.attractions = attractions

    # return attractions
    def getAttractions( self ) :
        return self.attractions

    # setting the attractions as per input
    def setAttractions( self , attractions = defaultdict( list ) ) :
        self.attractions = attractions

    # generating a summary using the input and feeding in to a dictionary
    # and returning it to the client_side for the convenience of using JSON object
    def generateExplore( self ) :
        summary = defaultdict( list )
        summary[ hotels ] = self.getHotels( )
        summary[ restaurants ] = self.getRestaurants( )
        summary[ flights ] = self.flights( )
        summary[ attractions ] = self.getAttractions( )
        return summary

    # intiailizing the database as the per the cityname which
    # is fed in as an argument and used to map the row it belongs too
    def initFromDatabase( self , cityName = '' ) :
        # SQL query tested on Heroku by Isiash
        # since it belongs to a single row for now we just access the first element
        # and use its information to set the arguments
        summary = connection.execute( "SELECT * FROM locations WHERE type='city' AND name=(%s) ;" , ( cityName ) ).fetchall( )[ -1 ]
        # getting the attractions list as per the city input
        attractions_list = connection.execute( "SELECT * FROM locations WHERE city=(%s)" , ( cityName ) ).fetchall( )

        for elem in attractions_list :
            if elem[ 3 ] != 'city' :
                self.attractions[ elem[ 3 ] ] += elem[ 4 ] ,

        self.setCity( summary[ 0 ] )
        self.setState( summary[ 2 ] )
        self.setType( summary[ 3 ] )
        self.setName( summary[ 4 ] )

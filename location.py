# importing necessary libraries
from collections import defaultdict
from flask import jsonify
from abc import abstractmethod
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from flights import *

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
    def __init__( self , location = [ '' , '' , '' , '' ] , attractions = defaultdict( list ) , flights = [ ] , image_url = '' ) :
        super( City , self ).__init__( location[ 0 ] , location[ 1 ] , location[ 2 ] , location[ 3 ] )
        # self.hotels = hotels
        # self.restaurants = restaurants
        self.flights = flights
        self.attractions = attractions
        self.image_url = image_url

    # return attractions
    def getAttractions( self ) :
        return self.attractions

    # setting the attractions as per input
    def setAttractions( self , attractions = defaultdict( list ) ) :
        self.attractions = attractions

    def getFlights( self ) :
        return self.flights

    def setFlights( self , flights ) :
        self.flights = flights

    def getImageUrl( self ) :
        return self.image_url

    def setImageUrl( self , image_url ) :
        self.image_url = image_url

    # generating a summary using the input and feeding in to a dictionary
    # and returning it to the client_side for the convenience of using JSON object
    def generateExplore( self ) :
        summary = defaultdict( list )
        #summary[ 'hotels' ] = self.getHotels( )
        #summary[ 'restaurants' ] = self.getRestaurants( )
        # object for the frontend which returns the output to the heroku
        for elem in self.getFlights( ) :
            summary[ 'flights' ] += elem.reportData( ) ,
        summary[ 'attractions' ] = self.getAttractions( )
        summary[ 'image_url' ] = self.getImageUrl( )
        return summary

    # intiailizing the database as the per the cityname which
    # is fed in as an argument and used to map the row it belongs too
    def initFromDatabase( self , cityName = '' ) :
        # SQL query tested on Heroku by Isaiah
        # since it belongs to a single row for now we just access the first element
        # and use its information to set the arguments
        summary = connection.execute( "SELECT * FROM locations WHERE type='city' AND name=(%s) ;" , ( cityName ) ).fetchall( )[ -1 ]
        # getting the attractions list as per the city input
        attractions_list = connection.execute( "SELECT * FROM locations WHERE city=(%s)" , ( cityName ) ).fetchall( )

        # functional query to access the database and get the flight itenaries
        flight_summary = connection.execute( "SELECT id FROM flights WHERE startcity IN ( SELECT name FROM locations WHERE type='city' AND name=(%s) ) OR endcity IN ( SELECT name FROM locations WHERE type='city' AND name=(%s) ) ; " \
        , ( cityName , cityName ) ).fetchall( )[ -1 ]


        # iterating through ids in flight_summary
        for ids in flight_summary :
            new_flight = Flight( )
            new_flight.initFromDatabase( ids )
            # initializing the database for that id and adding it to the database
            self.flights += new_flight ,

        # for elem in flight_summary :

        for elem in attractions_list :
            if elem[ 3 ] != 'city' :
                self.attractions[ elem[ 3 ] ] += elem[ 4 ] ,

        self.setCity( summary[ 0 ] )
        self.setState( summary[ 2 ] )
        self.setType( summary[ 3 ] )
        self.setName( summary[ 4 ] )
        self.setImageUrl( summary[ 5 ] )

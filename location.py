from collections import defaultdict
from abc import abstractmethod
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'

engine = create_engine( DB_URL )
connection = engine.connect( )

class Location:

    def __init__( self , city = ' ' , state = ' ' , type = ' ' , name = ' ' ) :
        self.city = city
        self.state = state
        self.type = type
        self.name = name

    @abstractmethod
    def getCity( self ) :
        return self.city

    @abstractmethod
    def setCity( self , city ) :
        self.city = city

    @abstractmethod
    def getState( self ) :
        return self.state

    @abstractmethod
    def setState( self , state ) :
        self.state = state

    @abstractmethod
    def getType( self ) :
        return self.type

    @abstractmethod
    def setType( self , type ) :
        self.type = type

    @abstractmethod
    def getName( self ) :
        return self.name

    @abstractmethod
    def setName( self , name ) :
        self.name = name

    @abstractmethod
    def initFromDatabase( self ) :
        print(None)

class City( Location ) :

    def __init__( self , location = [ ] , hotels = ' ' , restaurants = ' ' , flights = ' ' , attractions = ' ' ) :
        super( City , self ).__init__( location[ 0 ] , location[ 1 ] , location[ 2 ] , location[ 3 ] )
        self.hotels = hotels
        self.restaurants = restaurants
        self.flights = flights
        self.attractions = attractions

    def getHotels( self  ) :
        return self.hotels

    def getRestaurants( self  ) :
        return self.restaurants

    def getFlights( self  ) :
        return self.flights

    def getAttractions( self ) :
        return self.attractions

    def generateExplore( self ) :
        summary = defaultdict( list )
        summary[ hotels ] = self.getHotels( )
        summary[ restaurants ] = self.getRestaurants( )
        summary[ flights ] = self.flights( )
        summary[ attractions ] = self.getAttractions( )
        return summary

    def initFromDatabase( self , cityName ) :
        # SQL query tested on Heroku by Isiash
        print( connection.execute( 'SELECT * FROM locations WHERE type='city' AND name=(%s) ;' , ( cityName ) ) )

class Attraction( Location ) :

    def __init__( self , price = -1 ) :
        self.price = price

    def getPrice( self ) :
        return self.price

    def setPrice( self ) :
        return self.price

    def initFromDatabase( self ) :

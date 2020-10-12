from collections import defaultdict
from abc import abstractmethod

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

class City( Location ) :

    def __init__( self , hotels = ' ' , restaurants = ' ' , flights = ' ' , attractions = ' ' ) :
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

class Attraction( Location ) :

    def __init__( self , price = -1 ) :
        self.price = price

    def getPrice( self ) :
        return self.price

    def setPrice( self ) :
        return self.price

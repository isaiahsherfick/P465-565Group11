# importing necessary libraries
from collections import defaultdict
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import urllib, json

# Adding the Heroku URL
DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'
AUTH_KEY = 'AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw'
# Building a connection to the database
engine = create_engine(DB_URL)
connection = engine.connect()

class Place():
    def __init__( self , latitude = -69420 , longitude = -69420 ) :
        self.latitude = latitude
        self.longitude = longitude
        self.unfilteredAPIresults = [ ]
        self.restaurants = [ ]
        self.hotels = [ ]
        self.attractions = [ ]

    # setting longitude as per input
    def setLongitude( self , long ) :
        self.longitude = long

    # setting latitude as per input
    def setLatitude( self , lat ) :
        self.latitude = lat

    # getting latitude
    def getLatitude( self ) :
        return self.latitude

    # getting longitude
    def getLongitude( self ) :
        return self.longitude

    # getting the restaurants as long its valid
    # else calling initFromAPI for a valid set of coordinates
    def getRestaurants( self ) :
        if self.latitude == -69420 or self.longitude == -69420:
            return None
        if not self.restaurants :
            self.initFromAPI( )
        return self.restaurants

    # getting the hotels as long its valid
    # else calling initFromAPI for a valid set of coordinates
    def getHotels( self ) :
        if self.latitude == -69420 or self.longitude == -69420:
            return None
        if not self.hotels :
            self.initFromAPI( )
        return self.hotels

    # getting the attractions as long its valid
    # else calling initFromAPI for a valid set of coordinates
    def getAttractions( self ) :
        if self.latitude == -69420 or self.longitude == -69420:
            return None
        if not self.attractions :
            self.initFromAPI( )
        return self.attractions

    # intializing the API as per the valid coordinate
    def initFromAPI( self , radius ) :
        # if the coordinates is valid
        if self.latitude == -69420 or self.longitude == -69420:
            print( "Called initFromAPI on bad place object" )
            return None
        else :
            # getting the set of coordinates
            LOCATION = str( self.latitude ) + "," + str( self.longitude )
            attractionURL = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json'
                     '?location=%s'
                     '&radius=%s'
                     '&type=%s'
                     '&key=%s') % ( LOCATION , radius , 'tourist_attraction' , AUTH_KEY )
            hotelURL = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json'
                     '?location=%s'
                     '&radius=%s'
                     '&type=%s'
                     '&key=%s') % ( LOCATION , radius , 'lodging' , AUTH_KEY )
            restaurantURL = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json'
                     '?location=%s'
                     '&radius=%s'
                     '&type=%s'
                     '&key=%s') % ( LOCATION , radius , 'restaurant' , AUTH_KEY )
            # grabbing the JSON result
            # read the attractions , hotels , restaurants
            attractionResponse = urllib.request.urlopen( attractionURL )
            hotelResponse = urllib.request.urlopen( hotelURL )
            restaurantResponse = urllib.request.urlopen( restaurantURL )
            # read the attractions , hotels , restaurants
            attractionJsonRaw = attractionResponse.read( )
            hotelJsonRaw = hotelResponse.read( )
            restaurantJsonRaw = restaurantResponse.read( )
            # storing the attractions , restaurants , hotels
            self.attractions = json.loads( attractionJsonRaw )
            self.restaurants = json.loads( restaurantJsonRaw )
            self.hotels = json.loads( hotelJsonRaw )

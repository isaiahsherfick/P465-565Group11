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


#Grabbing and parsing the JSON data
def GoogPlac( lat = 38.901989 , lng = -77.041921 , radius = 5 , types = 2 , key = '' ) :
  #making the url
  AUTH_KEY = key
  LOCATION = str( lat ) + "," + str( lng )
  RADIUS = radius
  TYPES = types
  MyUrl = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json'
           '?location=%s'
           '&radius=%s'
           '&types=%s'
           '&sensor=false&key=%s') % (LOCATION, RADIUS, TYPES, AUTH_KEY)
  #grabbing the JSON result
  response = urllib.request.urlopen( MyUrl )
  jsonRaw = response.read( )
  # print( jsonRaw )
  jsonData = json.loads( jsonRaw )
  print( jsonData )
  return jsonData

#This is a helper to grab the Json data that I want in a list
# def IterJson(place):
#   x = [place['name'], place['reference'], place['geometry']['location']['lat'],
#          place['geometry']['location']['lng'], place['vicinity']]
#   return x


#todo
class Place():
    def __init__(self, latitude=-69420, longitude=-69420):
        self.latitude = latitude
        self.longitude = longitude
        self.unfilteredAPIresults = []
        self.restaurants = []
        self.hotels = []
        self.attractions = []
        self.flights = []
    def setLongitude(self, long):
        self.longitude = long
    def setLatitude(self, lat):
        self.latitude = lat
    def getLatitude(self):
        return self.latitude
    def getLongitude(self):
        return self.longitude
    def getUnfilteredAPIResults(self):
        return self.unfilteredAPIresults
    def getRestaurants(self):
        if self.latitude == -69420 or self.longitude == -69420:
            return None
        else:
            print("No implementation")
            #TODO
            #jsonify each of the restaurants, return as one json
    def getHotels(self):
        if self.latitude == -69420 or self.longitude == -69420:
            return None
        else:
            print("No implementation")
        #TODO
        #jsonify each of the hotels, return as one json
    def getAttractions(self):
        if self.latitude == -69420 or self.longitude == -69420:
            return None
        else:
            print("No implementation")
        #TODO
        #jsonify each of the attractions, return as one json
    def getFlights(self):
        if self.latitude == -69420 or self.longitude == -69420:
            return None
        else:
            print("No implementation")
        #TODO
        #jsonify each of the attractions, return as one json
    def initFromAPI(self, radius):
        if self.latitude == -69420 or self.longitude == -69420:
            print("Called initFromAPI on bad place object")
            return None
        else:
            LOCATION = str(self.latitude) + "," + str(self.longitude)
            attractionURL = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json'
                     '?location=%s'
                     '&radius=%s'
                     '&type=%s'
                     '&key=%s') % (LOCATION, radius, 'tourist_attraction', AUTH_KEY)
            hotelURL = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json'
                     '?location=%s'
                     '&radius=%s'
                     '&type=%s'
                     '&key=%s') % (LOCATION, radius, 'lodging', AUTH_KEY)
            restaurantURL = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json'
                     '?location=%s'
                     '&radius=%s'
                     '&type=%s'
                     '&key=%s') % (LOCATION, radius, 'restaurant', AUTH_KEY)
            # grabbing the JSON result
            attractionResponse = urllib.request.urlopen(attractionURL)
            hotelResponse = urllib.request.urlopen(hotelURL)
            restaurantResponse = urllib.request.urlopen(restaurantURL)
            attractionJsonRaw = attractionResponse.read( )
            hotelJsonRaw = hotelResponse.read( )
            restaurantJsonRaw = restaurantResponse.read( )
            attractionJsonData = json.loads( attractionJsonRaw )
            restaurantJsonData = json.loads( restaurantJsonRaw )
            hotelJsonData = json.loads( hotelJsonRaw )

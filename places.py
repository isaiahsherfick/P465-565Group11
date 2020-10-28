# importing necessary libraries
from collections import defaultdict
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import urllib, json

# Adding the Heroku URL
DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'
# Building a connection to the database
engine = create_engine(DB_URL)
connection = engine.connect()


#Grabbing and parsing the JSON data
def GoogPlac( lat = 38.901989 , lng = -77.041921 , radius = 5 , types = 2 , key = 'AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw' ) :
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

GoogPlac( )

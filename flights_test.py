# importing necessary libraries
from flights import *
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from collections import defaultdict

#
flight_details = defaultdict( list )
flight_details[ 'takeOffTime' ] = '2020-10-15 16:00:00+00:00'
flight_details[ 'startCity' ] = 'Indianapolis'
flight_details[ 'endCity' ] = 'Los Angeles'
flight_details[ 'businessRate' ] = 300.00
flight_details[ 'airline' ] = 'Southwest'
flight_details[ 'coachRate' ] = 150.00
flight_details[ 'arrivalTime' ] = '2020-10-15 23:00:00+00:00'

testFlightToLA = Flight( flight_details )

# testing getters functions
print( testFlightToLA.getTakeOffTime( ) )
print( testFlightToLA.getStartCity( ) )
print( testFlightToLA.getEndCity( ) )
print( testFlightToLA.getBusinessRate( ) )
print( testFlightToLA.getAirline( ) )
print( testFlightToLA.getCoachRate( ) )
print( testFlightToLA.getArrivalTime( ) )

# testing setters functions
flight_details[ 'takeOffTime' ] = '2020-10-15 16:00:00+00:00'
testFlightToLA.setStartCity( 'Indianapolis' )
testFlightToLA.setEndCity( 'Los Angeles' )
testFlightToLA.setBusinessRate( 300.00 )
testFlightToLA.setAirline( 'Southwest' )
testFlightToLA.setCoachRate( 150.00 )
flight_details[ 'arrivalTime' ] = '2020-10-15 23:00:00+00:00'


# testing getters functions
print("---------------------output for testFlightToLA--------------------------")
print( testFlightToLA.getTakeOffTime( ) )
print( testFlightToLA.getStartCity( ) )
print( testFlightToLA.getEndCity( ) )
print( testFlightToLA.getBusinessRate( ) )
print( testFlightToLA.getAirline( ) )
print( testFlightToLA.getCoachRate( ) )
print( testFlightToLA.getArrivalTime( ) )
print("---------------------output for testFlightToLA--------------------------")

# intiailizing the datetime
testFlightFromDB = Flight( )
testFlightFromDB.initFromDatabase( 0 )
print("---------------------output for testFlightFromDB-------------------------")
print(testFlightFromDB.getTakeOffTime( ) )
print( testFlightFromDB.getStartCity( ) )
print( testFlightFromDB.getEndCity( ) )
print( testFlightFromDB.getBusinessRate( ) )
print( testFlightFromDB.getAirline( ) )
print( testFlightFromDB.getCoachRate( ) )
print( testFlightFromDB.getArrivalTime( ) )
print("---------------------output for testFlightFromDB-------------------------")

# verificationt that the testing function is querying the database correctly as the data we have fed in
print( testFlightFromDB.equals( testFlightToLA ) )

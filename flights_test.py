# importing necessary libraries
from flights import *
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from collections import defaultdict

#
flight_details = defaultdict( list )
flight_details[ 'takeOffTime' ] = '2020-10-15 16:00:00+00'
flight_details[ 'startCity' ] = 'Indianapolis'
flight_details[ 'endCity' ] = 'Los Angeles'
flight_details[ 'businessRate' ] = 300
flight_details[ 'airline' ] = 'Southwest'
flight_details[ 'coachRate' ] = 150
flight_details[ 'arrivalTime' ] = '2020-10-15 23:00:00+00'

testFlightToLA = Flights( flight_details )

# testing getters functions
print( testFlightToLA.getTakeOffTime( ) )
print( testFlightToLA.getStartCity( ) )
print( testFlightToLA.getEndCity( ) )
print( testFlightToLA.getBusinessRate( ) )
print( testFlightToLA.getAirline( ) )
print( testFlightToLA.getCoachRate( ) )
print( testFlightToLA.getArrivalTime( ) )

# testing setters functions
testFlightToLA.setTakeOffTime( '2020-10-15 16:00:00+00' )
testFlightToLA.setStartCity( 'Indianapolis' )
testFlightToLA.setEndCity( 'Los Angeles' )
testFlightToLA.setBusinessRate( 300 )
testFlightToLA.setAirline( 'Southwest' )
testFlightToLA.setCoachRate( 150 )
testFlightToLA.setArrivalTime( '2020-10-15 23:00:00+00' )

# testing getters functions
print( testFlightToLA.getTakeOffTime( ) )
print( testFlightToLA.getStartCity( ) )
print( testFlightToLA.getEndCity( ) )
print( testFlightToLA.getBusinessRate( ) )
print( testFlightToLA.getAirline( ) )
print( testFlightToLA.getCoachRate( ) )
print( testFlightToLA.getArrivalTime( ) )

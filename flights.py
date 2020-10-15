# importing necessary libraries
from collections import defaultdict
from flask import jsonify
from abc import abstractmethod
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import datetime , pytz

class Flights :
    def __init__( self , itinerary = defaultdict( list ) ) :
        self.takeOffTime = itinerary[ 'takeOffTime' ]
        self.startCity = itinerary[ 'startCity' ]
        self.endCity = itinerary[ 'endCity' ]
        self.businessRate = itinerary[ 'businessRate' ]
        self.airline = itinerary[ 'airline' ]
        self.coachRate = itinerary[ 'coachRate' ]
        self.arrivalTime = itinerary[ 'arrivalTime' ]

    # getters
    # returning the takeOffTime
    def getTakeOffTime( self ) :
        return self.takeOffTime

    # returning the startCity
    def getStartCity( self ) :
        return self.startCity

    # returning the endCity
    def getEndCity( self ) :
        return self.endCity

    # returning the businessRate
    def getBusinessRate( self ) :
        return self.businessRate

    # returning the airline
    def getAirline( self ) :
        return self.airline

    # returning the coachRate
    def getCoachRate( self ) :
        return self.coachRate

    # returning the arrivalTime
    def getArrivalTime( self ) :
        return self.arrivalTime

    # setters
    # setting the takeOffTime as per input
    def setTakeOffTime( self , takeOffTime ) :
        self.takeOffTime = takeOffTime

    # setting the startCity as per input
    def setStartCity( self , startCity ) :
        self.startCity = startCity

    # setting the endCity as per input
    def setEndCity( self , endCity ) :
        self.endCity = endCity

    # setting the businessRate as per input
    def setBusinessRate( self , businessRate ) :
        self.businessRate = businessRate

    # setting the airline as per input
    def setAirline( self , airline ) :
        self.airline = airline

    # setting the coachRate as per input
    def setCoachRate( self , coachRate ) :
        self.coachRate = coachRate

    # setting the arrivalTime as per input
    def setArrivalTime( self , arrivalTime ) :
        self.arrivalTime = arrivalTime

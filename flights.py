# importing necessary libraries
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import json , requests
from datetime import datetime

# Adding the Heroku URL
DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'
# Building a connection to the database
engine = create_engine( DB_URL )

# the url for the flighscanners api
# and the headers with key fed into it
url = "https://rapidapi.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/"
headers = {
    'x-rapidapi-key': "bd4910c4f3msh6daf741cb57f839p19efffjsn9bbea2015d64",
    'x-rapidapi-host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    }

class Flights( ) :

    def __init__( self , startCity = '' , destinationCity = '' , startDate = datetime.today( ).strftime( '%Y-%m-%d' ) ) :
        self.startCity = startCity
        self.destinationCity = destinationCity
        self.startDate = startDate
        self.endDate = ""
        self.quotesList = ""
        self.carrierList = ""

    # getting the start city
    def getStartCity( self ) :
        return self.startCity

    # setting the start city
    def setStartCity( self , startCity ) :
        self.startCity = startCity

    # getting the destionation city
    def getDestinationCity( self ) :
        return self.destinationCity

    # setting the destionation city
    def setDestinationCity( self , destinationCity ) :
        self.destinationCity = destinationCity

    # getting the start date
    def getStartDate( self ) :
        return self.startDate

    # setting the start date
    def setStartDate( self , startDate ) :
        self.startDate = startDate

    # getting the end date
    def getEndDate( self ) :
        return self.endDate

    # setting the start date
    def setEndDate( self , endDate ) :
        self.endDate = endDate

    # the function to call the skyscanner's api
    def populatePortsFromAPI( self ) :
        # calling engine connect only temporarily so that it gets disconnected thereafter and doesn't remain always connected
        with engine.connect( ) as connection :
            # gettting the response for the starting city
            startResponse = requests.request( "GET" , url , headers = headers , params = { "query" : self.startCity } ).json( )
            # gettting the response for the destination city
            destinationResponse = requests.request( "GET" , url , headers = headers , params = { "query" : self.destinationCity } ).json( )
            # gettting the placeid for the starting city
            startPlace = startResponse[ "Places" ][ 0 ][ "PlaceId" ]
            # gettting the placeid for the ending city
            destinationPlace = destinationResponse[ "Places" ][ 0 ][ "PlaceId" ]
            # generating the url with start and end city and generating the url
            # with all the parameters and the key fed into it
            url2 = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + startPlace + "/" + destinationPlace + "/" + self.startDate + "/" + self.endDate + "?rapidapi-key=" \
            + headers[ "x-rapidapi-key" ]
            # getting the request for the url and showing the json outptu which will be used thereafter
            requested_data = requests.request( "GET" , url2 , headers = headers ).json( )
            self.quotesList = requested_data[ "Quotes" ]
            self.carrierList = requested_data[ "Carriers" ]
            # redudanat parameters not needed as of now
            # places_list = requested_data[ "Places" ]
            # currencies_list = requested_data[ "Currencies" ]

    # function to find the carrier name for the respective id
    def find_carrier( self , carrier_id ) :
        for elem in self.carrierList :
            if elem[ "CarrierId" ] == carrier_id :
                return elem[ "Name" ]
        return carrier_id

    def productJson( self ) :
        # calling the function for geting quotes and carriers list
        self.populatePortsFromAPI( )
        # the list
        flight_details = [ ]
        for elem in self.quotesList :
            nested_dict = elem[ "OutboundLeg" ]
            flight_details += { "price" : elem[ "MinPrice" ] , "direct" : elem[ "Direct" ] , "departureDate" : nested_dict[ "DepartureDate" ] , "carrierName" : self.find_carrier( nested_dict[ "CarrierIds" ][ 0 ] ) } ,
        # getting a json file and returning it with only relevant details in the list of dictionary
        return json.dumps( { "flight_details" : flight_details } )

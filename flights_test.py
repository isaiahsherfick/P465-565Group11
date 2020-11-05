# the testing file for flights
from flights import *

# generating an object for the input
flights_object = Flights( 'Los Angeles' , 'New York' )

# printing the getters
print( flights_object.getStartCity( ) )
print( flights_object.getDestinationCity( ) )
# calling the function which calls skyscanner api which in turn uses that data for generating flights itinerary
flights_object.populatePortsFromAPI( )
# print( flights_object.producePortsJson( ) )

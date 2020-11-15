# unit tesing for the location class
# importing necessary class and libraries
# from location import *
from itinerary import *

# sample testing
testItinerary = Itinerary(47)
testItinerary.initFromDBinsert()
testItinerary.appendTask("Test task test task")
testItinerary.saveItinerary()
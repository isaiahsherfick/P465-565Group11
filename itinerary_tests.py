# unit tesing for the location class
# importing necessary class and libraries
# from location import *
from itinerary import *

# sample testing
testing_obj = Itinerary( 1 )#, [ '10:00 AM Indy', '4:00PM LA', '6:30PM Denny' ] )
testing_obj.initFromDBdisplay()
print(testing_obj.getTasks())
print(testing_obj.getComments())
testing_obj.appendComment(5, "I love it let us go to Disney!")

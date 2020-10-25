# unit tesing for the location class
# importing necessary class and libraries
# from location import *
from itinerary import *
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import create_engine

# sample testing
testing_obj = Itinerary( 0 ,[ '10:00 AM Indy', '4:00PM LA', '6:30PM Denny' ] )
# testing_obj.saveItinerary( )
testing_obj.initFromDB( )
# print( testing_obj.productJson( ) )

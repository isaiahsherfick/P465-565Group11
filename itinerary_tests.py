# unit tesing for the location class
# importing necessary class and libraries
# from location import *
from itinerary import *
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import create_engine

# sample testing
a = Itinerary( 0 ,[ '10:00 AM Indy', '4:00PM LA', '6:30PM Denny' ] )
print( a.saveItinerary( ) )

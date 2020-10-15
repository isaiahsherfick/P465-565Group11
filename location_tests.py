# unit tesing for the location class
# importing necessary class and libraries
from location import *
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

# sample testing
# generating a random objectr and testing it by feeding in arguments for the parent class
chicago = City( [ 'Chicago' , 'IL' , 'city' , 'Chicago' ] )

# checking the get functions for all the parameters
# print( chicago.getCity( ) )
# print( chicago.getState( ) )
# print( chicago.getType( ) )
# print( chicago.getName( ) )

# setting the parameters for the parent class
# chicago.setCity( 'Bloomington' )
# chicago.setState( 'IN' )
# chicago.setType( 'city' )
# chicago.setName( 'Bloomington' )

# printing get functions after set has been called for verification
# print( chicago.getCity( ) )
# print( chicago.getState( ) )
# print( chicago.getType( ) )
# print( chicago.getName( ) )

# generating a new object
testing_city = City( [ '' , '' , '' , '' ] )

# intiailizing the database as the per the city argument
#testing_city.initFromDatabase( 'Chicago' )

# checking the get function to see if the
# set function has been called and all the items
# have been instantiated as per the call from the get function
# print( testing_city.getCity( ) )
# print( testing_city.getState( ) )
# print( testing_city.getType( ) )
# print( testing_city.getName( ) )

# checking the two objects which should have same parameters
# print( chicago.verification_Data( testing_city ) )

testing_city.initFromDatabase( 'Los Angeles' )

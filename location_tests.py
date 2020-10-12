from location import *

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

# sample testing
chicago = City( [ 'Chicago' , 'IL' , 'city' , 'Chicago' ] )

# print( chicago.getCity( ) )
# print( chicago.getState( ) )
# print( chicago.getType( ) )
# print( chicago.getName( ) )
#
# print( chicago.setCity( 'Bloomington' ) )
# print( chicago.setState( 'IN' ) )
# print( chicago.setType( 'city' ) )
# print( chicago.setName( 'Bloomington' ) )
#
# print( chicago.getCity( ) )
# print( chicago.getState( ) )
# print( chicago.getType( ) )
# print( chicago.getName( ) )

print( self.initFromDatabase( 'Chicago' ) )

#
# print( chicago.setCity( ) )

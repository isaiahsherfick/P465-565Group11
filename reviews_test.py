# importing necessary libraries
from reviews import *

# intiailizing Reviews object
testing_obj = Review( [ 0 , 0 , "abcdefg" , 3 , "Decent place" , "We had a good time visiting this location" ] )

# print( testing_obj.getReviewId( ) )
# print( testing_obj.getOwnerId( ) )
# print( testing_obj.getUniqueLocationKey( ) )
# print( testing_obj.getStarsOutOfFive( ) )
# print( testing_obj.getReviewHeader( ) )
# print( testing_obj.getReviewBody( ) )


# calling initalize database function
# testing_obj.initFromDatabase( 1 )

# print( testing_obj.getReviewId( ) )
# print( testing_obj.getOwnerId( ) )
# print( testing_obj.getUniqueLocationKey( ) )
# print( testing_obj.getStarsOutOfFive( ) )
# print( testing_obj.getReviewHeader( ) )
# print( testing_obj.getReviewBody( ) )

# printing Json Output
# print( testing_obj.productJson( ) )


print( testing_obj.gatherReviews( "abcdefg" ) )

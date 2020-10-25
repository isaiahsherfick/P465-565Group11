# importing necessary libraries
from collections import OrderedDict
from flask import jsonify
from abc import abstractmethod
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from flights import *
from location import *
import json

# Adding the Heroku URL
DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'
# Building a connection to the database
engine = create_engine(DB_URL)
connection = engine.connect()


class Review( ):

        #reviews: review_id,owner_id,unique_location_key,stars_out_of_five,review_header,review_body
        def __init__( self , reviews = [ '' , '' , '' , '' , '' , '' ] ) :
            self.review_id = reviews[ 0 ]
            self.owner_id = reviews[ 1 ]
            self.unique_location_key = reviews[ 2 ]
            self.stars_out_of_five = reviews[ 3 ]
            self.review_header = reviews[ 4 ]
            self.review_body = reviews[ 5 ]

        # getting Review Id
        def getReviewId( self ) :
            return self.review_id

        # setting Review Id
        def setReviewId( self , review_id = '' ) :
            self.review_id = review_id

        # getting Owner Id
        def getOwnerId( self ) :
            return self.owner_id

        # setting Review Id
        def setOwnerId( self , owner_id = '' ) :
            self.owner_id = owner_id

        # getting Unique Location Key
        def getUniqueLocationKey( self ) :
            return self.unique_location_key

        # setting  Unique Location Key
        def setUniqueLocationKey( self , unique_location_key = '' ) :
            self.unique_location_key = unique_location_key

        # getting Stars Out of Five
        def getStarsOutOfFive( self ) :
            return self.stars_out_of_five

        # setting Stars Out of Five
        def setStarsOutOfFive( self , stars_out_of_five = '' ) :
            self.stars_out_of_five = stars_out_of_five

        # setting Review Header
        def getReviewHeader( self ) :
            return self.review_header

        # setting Review Header
        def setReviewHeader( self , review_header = '' ) :
            self.review_header = review_header

        # getting Review Body
        def getReviewBody( self ) :
            return self.review_body

        # setting Review Body
        def setReviewBody( self , review_body = '' ) :
            self.review_body = review_body

        # intializing database as per the review id as per input
        def initFromDatabase( self , review_id ) :
            reviews = connection.execute("select * from reviews where review_id={}".format( review_id ) ).fetchall( )[ 0 ]
            self.review_id = reviews[ 0 ]
            self.owner_id = reviews[ 1 ]
            self.unique_location_key = reviews[ 2 ]
            self.stars_out_of_five = reviews[ 3 ]
            self.review_header = reviews[ 4 ]
            self.review_body = reviews[ 5 ]

        # gather all reviews from the database for the particular unique_location_key
        def gatherReviews( self , unique_location_key ) :
            review_ids = connection.execute( "select review_id from reviews where unique_location_key='{}';".format( unique_location_key ) ).fetchall(  )
            review_ids , all_reviews = [ ids[ 0 ] for ids in review_ids ] , [  ]
            for ids in review_ids :
                obj = Review( )
                obj.initFromDatabase( ids )
                print( obj.setStarsOutOfFive( ) )
                all_reviews += obj ,
                print( obj.setStarsOutOfFive( ) )
            return all_reviews

        # def produceJson( self ) :
        #     return json.dumps( { "tasks" : self.tasks } )

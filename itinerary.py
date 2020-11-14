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



# Itinerary class to connect frontend to DB
class Itinerary( ) :

    # the constructor having the input ownerId and the list of tasks
    def __init__( self , ownerId = -1 , tasks = [ ] , comments = [ ] ) :
        self.ownerId = ownerId
        # self.tasks = processTasks( tasks )
        self.tasks = tasks
        self.comments = comments
    #in the case where we are constructing the Itinerary object from the DB to pass to the frontend, a blank one will be instantiated
    #then initFromDB will be called to populate the member variables

    # adding a task to a preexisting list of tasks
    def appendTask( self , task ) :
        self.tasks += task ,

    def appendComment(self, commenterId, comment):
        with engine.connect() as connection:
            self.comments += str(commenterId) + " " + comment,
            print(self.comments)
            commentsAsSQLArray = '\'{'
            for comment in self.comments :
                commentsAsSQLArray += '\"' + str( comment ) + '\"' + ','
            commentsAsSQLArray = commentsAsSQLArray[ :-1 ]
            commentsAsSQLArray += '}\''
            connection.execute("UPDATE Itinerary SET comments={} WHERE owner_id={}".format(commentsAsSQLArray, self.ownerId))

    def flushComments(self):
        with engine.connect() as connection:
            connection.execute("UPDATE Itinerary SET comments=\'{}\' WHERE owner_id={}".format('{}', self.ownerId))
        print("Comments flushed")

    def getComments(self):
        return self.comments

    # returning the list of tasks
    def getTasks( self ) :
        return self.tasks

    # checking whether the id of the task is valid if it can be returned
    # else returning invalid statement.
    def getTask( self , idx ) :
        if id > len( self.tasks ) :
            return self.tasks[ idx ]
        else :
            return "Invalid Task"

    # checking whether the id of the task is valid if it can be removed
    # else printing error statement
    def removeTask( self , idx ) :
        if id > len( self.tasks ) :
            self.tasks.pop( idx )
        else :
            print( "Invalid Task" )

    # returning the index of the task if that exists else printing error statement
    def getIndex( self , task ) :
        if task in self.tasks :
            return self.tasks.index( task )
        return "Invalid Task"

    # returning the task from the list if that exists else printing error statement
    def removeTask( self , task ) :
        if task in self.tasks :
            self.tasks.remove( task )
        else :
            print( "Invalid Task" )

    def processTasks( self , tasks ) :
        if( tasks ) :
            tasks = tasks[ 1 : -1 ].replace( '"' , '' ).split( ',' )
        return tasks

    # the itinerary comprising of all the tasks for a respective user id
    def saveItinerary( self ) :
        if not self.tasks :
            with engine.connect() as connection:
                connection.execute( "INSERT INTO itinerary values ( {} , \'{}\');".format( self.ownerId , "{}" ) )
        else :
            tasksAsSQLArray = ''
            for task in self.tasks :
                tasksAsSQLArray += (',\"' + str( task ) + '\"')
            tasksAsSQLArray = '{' + tasksAsSQLArray[ 1: ] + '}'
            with engine.connect() as connection:
                connection.execute( "INSERT INTO itinerary values ({}, (\'{}\'));".format( self.ownerId , tasksAsSQLArray ) )

    # # assuming the itinerary to handle string to list manipulation
    def initFromDBinsert( self ) :
        with engine.connect() as connection:
            summary = connection.execute( "SELECT * FROM itinerary WHERE owner_id={}".format( self.ownerId ) ).fetchall( )
            connection.execute( "DELETE FROM itinerary WHERE owner_id={}".format( self.ownerId ) )
        self.tasks = list( summary[ 0 ][ 1 ] ) if summary else [ ]

    def initFromDBdisplay( self ) :
        # connection = engine.connect( )
        with engine.connect() as connection:
            summary = connection.execute( "SELECT * FROM itinerary WHERE owner_id={}".format( self.ownerId ) ).fetchall( )
        # connection.close( )
        if summary:
            print(summary)
            self.tasks = list( summary[ 0 ][ 1 ] )
            self.comments = list( summary[ 0 ][ 2 ] )
        else:
            self.tasks = [ ]

    # returning json object of the list of tasks
    def productJson( self ) :
        return json.dumps( { "tasks" : self.tasks } )

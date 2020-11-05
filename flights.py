# importing necessary libraries
from collections import defaultdict
from flask import jsonify
from abc import abstractmethod
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import datetime , pytz
import requests

# Adding the Heroku URL
DB_URL = 'postgres://ugcuvkvpcdaixu:b624b6193c9e248af602f7239c6ddca6848239242adbcb31a9fd4685ac75aabf@ec2-204-236-228-169.compute-1.amazonaws.com:5432/d93me5889f2sp1'
# Building a connection to the database
engine = create_engine( DB_URL )





url = "https://rapidapi.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/"

querystring = {"query":"Chicago"}

headers = {
    'x-rapidapi-key': "bd4910c4f3msh6daf741cb57f839p19efffjsn9bbea2015d64",
    'x-rapidapi-host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)




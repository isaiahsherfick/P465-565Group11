from flask import Flask

app = Flask(__name__)

# route decorator to end point to application
# endpoint anything the starts with /
#cbecks the endpoint of the path and routes there
@app.route( '/' )
def index( ) :
    # function to handle the request to a endpoint
    # shows output convincing the developer that the server is running
    return 'Hello World!'

# checks whether current file is running
if __name__ == '__main__' :
    # debug = True makes it convenient by restarting the server whenever code is updated
    # default port 5000 , can pass it in the argument if we want to change it
    app.run( debug = True )

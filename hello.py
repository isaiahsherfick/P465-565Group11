from flask import Flask
import os
flask_app = Flask(__name__, static_folder='./build',static_url_path='/')
@flask_app.route("/")
def hello():
		return flask_app.send_static_file('index.html')
if __name__ == "__main__":
	flask_app.run()

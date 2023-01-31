from flask import (Flask, jsonify)
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

client = MongoClient('localhost', 27017)

db = client.flask_db

@app.route('/', methods=['GET'])
def index():
    return {"response": 'Web App with Python Flask!'}

@app.route("/basicAPI", methods=['GET'])
def helloWorld():
    return {"api",
            "called"}

#app.run(host='0.0.0.0', port=5000)
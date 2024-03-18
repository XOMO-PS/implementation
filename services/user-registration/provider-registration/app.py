from flask import Flask, jsonify
from provider import db, Users
import os


app = Flask(__name__)

#Configuring our sample database on ElephantSQL for now, until AWS is set up

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://wkqmjhrt:FLZo15GpZ1jvzZ85Qkfm_TPIEv2G5s3e@rain.db.elephantsql.com/wkqmjhrt"

db.init_app(app)

@app.route("/provider/register",methods=["POST"])
def create_provider():

    #Extract JSON Data from the http request

    
    #Process the JSON Data, Validation or any other operations including the file upload


    #Return a JSON response which looks like this, we might have additional things later on.
   new_user = Users(
      first_name= "John Doe",
      last_name= "John Doe", 
      email= "johndoe@example.com",
      _type= "customer",
      password= "hashed_password",
      profile= {},
      settings= {} 
      )
      
   db.session.add(new_user)
   db.session.commit()
   return jsonify({'message': 'User created successfully'}), 201
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy import create_engine
from sqlalchemy.dialects.postgresql import JSON


db = SQLAlchemy()

class Users(db.Model):
    _id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    _type = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    profile = db.Column(db.JSON)
    settings = db.Column(db.JSON)
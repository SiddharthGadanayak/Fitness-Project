from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    age = db.Column(db.Integer)  #  user's age
    height = db.Column(db.Float)    # user's height in cm
    weight = db.Column(db.Float)    # user's weight in kg
    gender = db.Column(db.String(10))  # user's gender
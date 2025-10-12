from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
    
    db.init_app(app)

    from .routes import auth_routes
    app.register_blueprint(auth_routes)

    return app
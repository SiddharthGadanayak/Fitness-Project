from flask import Blueprint, request, jsonify
from .models import User
from . import db

auth_routes = Blueprint("auth_routes", __name__)

@auth_routes.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend running successfully!"})

@auth_routes.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "Email already registered"}), 400

    new_user = User(name=name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully", "email": email}), 201


@auth_routes.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"message": "Invalid email or password"}), 401

    return jsonify({"message": "Login successful", "email": user.email}), 200
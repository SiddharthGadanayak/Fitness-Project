from flask import Blueprint, request, jsonify
from utils.bmi_bmr import calculate_bmi, calculate_bmr
from . models import User
from . import db

auth_routes = Blueprint("auth_routes", __name__)
bmi_bp = Blueprint('bmi_bp', __name__)

# Test Message
@auth_routes.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend running successfully!"})

# User Registration
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

# User Login
@auth_routes.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"message": "Invalid email or password"}), 401

    return jsonify({"message": "Login successful", "email": user.email}), 200

# BMI and BMR Calculator
@bmi_bp.route('/api/calculate-bmi-bmr', methods=['POST'])
def get_bmi_bmr():
    try:
        data = request.get_json()
        weight = float(data.get('weight'))
        height = float(data.get('height'))
        age = int(data.get('age'))
        gender = data.get('gender', 'male')

        bmi, status = calculate_bmi(weight, height)
        bmr = calculate_bmr(weight, height, age, gender)

        return jsonify({
            "BMI": bmi,
            "BMI_Status": status,
            "BMR": bmr,
            "Message": "Calculation successful!"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400
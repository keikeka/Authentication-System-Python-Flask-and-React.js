from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta

api = Blueprint('api', __name__)

# Route Signup 
@api.route('/signup', methods=['POST'])
def signup(): 
    email = request.json.get("email")
    password = request.json.get("password")  
    newUser = User(email = email, password = password)
    db.session.add(newUser)
    db.session.commit()   
    return jsonify(newUser.serialize()), 200

# Route Login 
@api.route('/login', methods=['POST', 'GET']) ## LISTO
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    user = User.query.filter_by(email=email).first()
    
    if user: 
        if password != user.password: 
            return jsonify({"message" : "Bad email or password"}), 401
        else: 
            time = timedelta(minutes = 30)
            access_token = create_access_token(identity = user.id, expires_delta = time)
            return jsonify(access_token = access_token)
    else:
        return jsonify({"message" : "Invalid email"}), 401
    
# Route Private 
@api.route('/protected', methods=['GET'])
@jwt_required() 
def protected(): 
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user: 
        return jsonify({"Logged_in" : True}), 200
    else:
        return jsonify({"Logged_in" : False}), 400   




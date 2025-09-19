from flask import Blueprint, render_template, request, send_from_directory




public_routes = Blueprint("public_routes", __name__)

@public_routes.route("/")
def home():
    return render_template("index.html")

@public_routes.route("/login")
def login():
    return render_template("login.html")

@public_routes.route("/register")
def register():
    return render_template("register.html")
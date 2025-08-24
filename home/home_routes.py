from flask import Blueprint, render_template, request, send_from_directory


home_routes = Blueprint("home_routes", __name__)

@home_routes.route("/")
def home():
    return render_template("Chathome.html")

@home_routes.route("/login")
def signIn():
    return render_template("login.html")

@home_routes.route("/signup")
def register():
    return render_template("sign.html")

@home_routes.route("/dashboard")
def dashboard():
    return render_template("dashboard_Based.html")
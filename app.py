from flask  import Flask    
from jinja2 import ChoiceLoader, FileSystemLoader
from home.home_routes import home_routes


app = Flask(__name__, static_folder="frontend/static")


template_loader = ChoiceLoader([
    FileSystemLoader("frontend/templates")
])

app.jinja_loader = template_loader

app.register_blueprint(home_routes)



if __name__ == "__main__":
    app.run(debug=True)
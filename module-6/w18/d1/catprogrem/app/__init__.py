# Server
from flask import Flask
from .config import Config
from .routes import cats
from .models import db

app = Flask(__name__)
app.config.from_object(Config)

app.register_blueprint(cats.bp)

db.init_app(app)

@app.route("/")
def home():
    return "<h1>hiiiiii</h1>"
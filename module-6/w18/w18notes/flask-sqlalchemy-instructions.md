# FLASK WITH SQLALCHEMY（w18/d1/catprogrem）

# Flask allows us to create servers in python

1. The first thing that we have to do is install dependencies

# pipenv install flask sqlalchemy flask-sqlalchemy python-dotenv 

2. Setup the file structure

├── .env  <-- other env variables
├── .flaskenv <-- Flask env variables
├── app
│   ├── __init__.py   <--- Server
│   ├── config.py   <-- Configurate your server with sqlalchemy
│   └── routes  <-- Routes 
        └── cats.py <-- cat routes
│   └── models   
        └── __init__.py <-- Store our db object for sqlalchemy
        └── cats.py <-- Cat Model 
└── server.py    <-- Tells flask where to find the server
└── database.py    <-- Setup script for our database


3. Next, let's fill out the env and the flaskenv

# IN THE FLASK ENV:

FLASK_APP=server.py
FLASK_DEBUG=True

# IN THE ENV:

FLASK_ENV=development
SECRET_KEY=beepboop
DATABASE_URL=sqlite:///dev.db

# In config.py:

import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

4. Now let's create the bare bones for our flask server in app/__init__.py

from flask import Flask
from .config import Config


# CREATE OUR FLASK SERVER
app = Flask(__name__)
# Configurate your server with the env variables
app.config.from_object(Config)

5. JUST TO TEST THAT THE SERVER IS SET UP CORRECTLY ADD A ROUTE into __init__.py

@app.route('/')
def home():
    return '<h1>Hiii</h1>'


6. Import the app into server.py because the env thinks the server is in there
# in server.py:

from app import app


7. To run the server:

# Option 1:
pipenv run flask run

-- To specify a port: pipenv run flask run -p 5004

# Option 2:

pipenv shell
flask run
-- flask run -p 8003

## PHASE TWO - Adding routes

8. Create a blueprint in app/routes/cats.py 

from flask import Blueprint

bp = Blueprint("cats", __name__, url_prefix="/cats")

@bp.route('/') 
def cats():
    return '<h1>Cats!</h1>'

9. Import the blueprint into our server (__init__.py) to connect it 
__init__.py:

from flask import Flask
from .config import Config
from .routes import cats

app = Flask(__name__)

app.config.from_object(Config)


app.register_blueprint(cats.bp)

@app.route('/')
def home():
    return '<h1>Hiii</h1>'

10. NOW SQLALCHEMY: Create a db object in models/__init__.py

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


11. Inside of models/cats.py create a cat model make sure to import db from init

# models/cats.py:

from . import db

class Cat(db.Model):
    __tablename__ = "cats" 

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer)

    # Create a method to spit out a dictionary version of the cat
    # JUST FOR OUR CONVENIENCE

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'age': self.age
        }


12. Import the db object from model/init into our flask server /app/__init__.py
# app/__init__.py should now look like this:

from flask import Flask
from .config import Config
from .routes import cats #Routes
from .models import db #db object


app = Flask(__name__)

app.config.from_object(Config)

app.register_blueprint(cats.bp)

db.init_app(app) #Connect server with db object


@app.route('/')
def home():
    return '<h1>Hiii</h1>'


13. CREATE OUR DATABASE 
We need to tell SQLAlchemy to create a sqlitedb with our cat table
we are going to create our setup script in database.py
# in database.py:

from app import app, db

from app.models.cats import Cat

with app.app_context():
    db.drop_all() #Drop all tables
    db.create_all() #Create all tables

    #Optional: You can seed some cats

    cat1 = Cat(name="Greenbean", age=2)
    cat2 = Cat(name="Kilo", age=1)
    cat3 = Cat(name="Baxter", age=7)

    #Add the seed cats into the db

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)

    # Commit the db changes (saving the changes in the db)
    db.session.commit()


14. Run database.py:
# In the terminal
pipenv shell
python database.py

15. CREATE SOME ROUTESSSSSS
# See routes/cats.py

-----------------------------


### Explanation of Flask with SQLAlchemy Setup

This guide walks through the process of creating a **Flask application** using **SQLAlchemy** as the ORM (Object-Relational Mapping) tool. Here's a detailed breakdown:

---

### **1. Project Structure**
The proposed structure organizes the project by separating concerns: 

- **`app/`**: Contains the Flask app and its components:
  - `__init__.py`: Initializes the Flask app and integrates components (e.g., config, routes, database).
  - `routes/`: Stores route logic (e.g., for different entities like "cats").
  - `models/`: Defines the database models (e.g., the `Cat` model for the "cats" table).
- **Configuration Files**:
  - `.env`: Environment variables (e.g., secrets, database URL).
  - `.flaskenv`: Flask-specific configurations like app entry-point and debug mode.
- **Server & Database Files**:
  - `server.py`: Entry point for running the Flask app.
  - `database.py`: Script for initializing and seeding the database.

---

### **2. Setting Environment Variables**
- `.flaskenv` contains:
  - `FLASK_APP=server.py`: Tells Flask which file to use as the entry point.
  - `FLASK_DEBUG=True`: Enables debug mode for development.
- `.env` contains:
  - `SECRET_KEY`: A secret key for session and app security.
  - `DATABASE_URL`: Database connection string (`sqlite:///dev.db` for SQLite in this case).

---

### **3. Flask Server Initialization**
The server is initialized in `app/__init__.py`:
1. **Flask App Creation**: 
   ```python
   app = Flask(__name__)
   app.config.from_object(Config)
   ```
   The app is configured using the `Config` class (defined in `config.py`), which loads environment variables.

2. **Registering Blueprints**: Blueprints allow modularizing route logic:
   ```python
   from .routes import cats
   app.register_blueprint(cats.bp)
   ```
   This example connects routes defined in `routes/cats.py` to the app.

3. **Connecting to the Database**:
   ```python
   from .models import db
   db.init_app(app)
   ```
   The `db` object (from `models/__init__.py`) integrates SQLAlchemy into the Flask app.

---

### **4. Setting Up Routes**
- Routes are defined in **`app/routes/cats.py`**:
   ```python
   from flask import Blueprint

   bp = Blueprint("cats", __name__, url_prefix="/cats")

   @bp.route('/')
   def cats():
       return '<h1>Cats!</h1>'
   ```
  - `Blueprint`: Helps organize routes with a shared URL prefix (`/cats` in this case).
  - This route simply returns a test message (`<h1>Cats!</h1>`).

---

### **5. Database Model Definition**
In **`models/cats.py`**:
- **Define the `Cat` Model**:
   ```python
   from . import db

   class Cat(db.Model):
       __tablename__ = "cats" 
       id = db.Column(db.Integer, primary_key=True)
       name = db.Column(db.String(255), nullable=False)
       age = db.Column(db.Integer)

       def to_dict(self):
           return {'id': self.id, 'name': self.name, 'age': self.age}
   ```
   - **SQLAlchemy ORM** maps the Python `Cat` class to a database table called `cats`.
   - Columns (`id`, `name`, `age`) correspond to table fields.
   - `to_dict()` is a helper method for serializing model objects.

---

### **6. Creating & Seeding the Database**
In **`database.py`**:
1. The app context is used to perform database operations:
   ```python
   with app.app_context():
       db.drop_all()  # Remove existing tables
       db.create_all()  # Create tables based on models
   ```
2. Optional seeding:
   ```python
   cat1 = Cat(name="Greenbean", age=2)
   db.session.add(cat1)
   db.session.commit()
   ```
   Adds sample records to the `cats` table for testing.

---

### **7. Running the Application**
- Start the Flask server:
   ```bash
   pipenv run flask run
   ```
- To initialize the database:
   ```bash
   pipenv shell
   python database.py
   ```

---

### **8. Final Steps: Advanced Routes**
You can expand the routes in **`routes/cats.py`** to include CRUD operations:
- **Retrieve all cats**:
   ```python
   @bp.route('/all')
   def get_all_cats():
       cats = Cat.query.all()
       return [cat.to_dict() for cat in cats], 200
   ```
- **Add a new cat**:
   ```python
   @bp.route('/add', methods=['POST'])
   def add_cat():
       data = request.json
       new_cat = Cat(name=data['name'], age=data['age'])
       db.session.add(new_cat)
       db.session.commit()
       return new_cat.to_dict(), 201
   ```

This structure is scalable and suitable for adding more features as needed.
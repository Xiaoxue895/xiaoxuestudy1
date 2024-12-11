# Setup script for our database
from app import app,db
from app.models.cats import Cat

with app.app_context():
    db.drop_all()
    db.create_all()

    cat1 = Cat(name = "oubao",age = 10)
    cat2 = Cat(name = "xuegao",age = 4)
    cat3 = Cat(name = "dapeng",age = 2)

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)

    db.session.commit()
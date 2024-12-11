# cat routes
from flask import Blueprint,jsonify,request
from ..models import db
from ..models.cats import Cat

bp = Blueprint("cats",__name__,url_prefix ="/cats")


# get all cats

@bp.route("/",methods = ["GET"])
def cats():
    all_cats = db.session.query(Cat)

    result_list = []

    for cat in all_cats:
        new_cat = cat.to_dict()
        result_list.append(new_cat)

    return jsonify(result_list)
    # cats = Cat.query.all()
    # return [cat.to_dict() for cat in cats],200

# create a new Cat
@db.route('/',methods = ["POST"])
def create_cat():
    cat = request.json
    new_cat = Cat(**cat)
    db.session.add(new_cat)
    db.session.commit()
    return jsonify(new_cat.to_dict())

# update a cat

@db.route('/<cat_id>',methods = ['PATCH'])
def update_cat(cat_id):
    cat = db.session.query(Cat).get(cat_id)

    if cat:
        if 'name' in request.json:
            cat.name = request.json['name']
        if 'age' in request.json:
            cat.age = request.json['age']
        db.session.commit()

        return jsonify(cat.to_dict())
    
    return jsonify({"mag":"cat not found"})

@bp.route("/<cat_id>",methods = ['DELETE'])
def delete_cat(cat_id):
    cat = db.session.query(Cat).get(cat_id)

    if cat:
        db.session.delete(cat)
        db.session.commit()
        return jsonify({"msg":"cat successfully deleted"})
    return jsonify({"mag":"cat not found"})





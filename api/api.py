from sklearn.metrics.pairwise import cosine_similarity, euclidean_distances
import pickle
from flask import  Flask, request, Response, jsonify

import pandas as pd
import numpy as np
from pymongo import MongoClient
import bson.json_util as json_util
# from flask_cors import CORS
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# app = Flask(__name__)
# CORS(app)
# Atlas MongoDB connection string
mongo_uri = "mongodb+srv://yuvraj:Yuvi%402003@cluster0.j0dbvjv.mongodb.net/?retryWrites=true&w=majority"

# Initialize MongoDB client
client = MongoClient(mongo_uri)

# Select database
db = client["productDB"]
# Select collection
collection = db["proFeatures"]


import json
fp = open('./wiginsDatabse.json')
db = json.load(fp)
@app.route('/', methods=["POST"])
@cross_origin()
def index():
    if request.method == "POST":
        # temp = request.get_json(force=True)
        item=request.form.get('button')
        # item=request.data.buttonName;

    print(item)
    s=item

    X_model = pickle.load(open('X_model.pkl', 'rb'))
    df = pd.read_json('wiginsDatabse.json')

    mvie2index = pd.Series(df.index, index=df['title'])
    idx = mvie2index[s]
    query = X_model[idx]
    scores = cosine_similarity(query, X_model)
    recommended_indx = (-scores.flatten()).argsort()[1:6]
    recommended_items = df['title'].iloc[recommended_indx]
    test2 = np.array(recommended_items)
    print(test2)
    test2 = test2.tolist()
    print(type(test2[0]))

    ans=[]
    for j in range(len(test2)):
        for i in range(len(db)):
            if db[i]["title"]==test2[j]:
                x=db[i]["image"]
                ans.append({"title":test2[j],"image":db[i]["image"]})

    print(ans)

    return jsonify(ans)
    # return "Hello"
    # return jsonify(ans)



    # rteurn jsonify(test2)

    

if __name__ == '__main__':
    app.run(debug=True)

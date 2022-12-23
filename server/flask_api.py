from flask import Flask, jsonify
from flask_cors import CORS
import gpg_data

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

@app.route("/getgpgdata/")


def get_json_data():
    data = gpg_data.get_data()
    return jsonify(data)

# get_json_data()
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)
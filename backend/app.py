from flask import Flask, request, jsonify
import random
import datetime


# declare constants
HOST = '0.0.0.0'
PORT = 5000

x = datetime.datetime.now()

# initialize flask application
app = Flask(__name__)

# sample hello world page
@app.route('/')
def hello():
    return "<h1>Hello World</h1>"

@app.route('/api/roll')
def roll():
    return jsonify(
        one=random.randint(1, 7),
        two=random.randint(1, 7),
        three=random.randint(1, 7)
    )

if __name__ == '__main__':
    app.run(host=HOST,
            debug=True,
            port=PORT)

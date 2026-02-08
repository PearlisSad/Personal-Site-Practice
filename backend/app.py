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

@app.route('/roll')
def roll():
    return jsonify(
        One=random.randint(1, 7),
        Two=random.randint(1, 7),
        Three=random.randint(1, 7)
    )

@app.route('/jackpot_check')
def jackpot(one ,two, three):
    return one == two == three

# sample api endpoint
@app.route('/api/test', methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        # get parameters from post request
        parameters = request.get_json()
        if 'test' in parameters:
            return jsonify({'value': parameters['test']})
        return jsonify({'error'})
    else:
        return jsonify({'test': 'success'})

# Route for seeing a data
@app.route('/data')
def get_time():
    # Returning an api for showing in  reactjs
    return {
        'Name':"geek",
        "Age":"22",
        "Date":x,
        "programming":"python"
        }


if __name__ == '__main__':
    app.run(host=HOST,
            debug=True,
            port=PORT)

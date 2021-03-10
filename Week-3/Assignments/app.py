from flask import (Flask, request, render_template, redirect, url_for, make_response)

import json

app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    condition = 'Lack of Paramater'
    num1 = request.args.get('number')
    try:
        num1 = int(num1)
        result = int((1+num1)*(num1)/2)
        return render_template('calculate_sum.html', result = result)
    except:
        condition = 'Wrong Parameter'
        return render_template('data.html', condition = condition)
    return render_template('data.html', condition = condition)

def get_cookie():
    try:
        data = request.cookies.get('name')
    except TypeError:
        data = ''
    return data

@app.route('/myName')
def my_name():
    return render_template('myName.html', track_name= get_cookie())

@app.route('/trackName')
def track_name():
    name = request.args.get('name')
    response = make_response(redirect(url_for('my_name')))
    response.set_cookie('name', name)
    return response



app.run(debug=True, host='0.0.0.0', port=3000)

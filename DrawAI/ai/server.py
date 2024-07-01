import drawAi
from flask import request
from flask import Flask
from flask_cors import CORS
import torch
from torch import nn


app = Flask(__name__)
CORS(app)

@app.route('/')
@app.route('/index')
def index():
    return Flask.redirect(Flask.url_for('static', filename='index.html'))

@app.route('/api/aiGuess', methods=['POST', 'GET'])
def aiGuess():
    try:
        userInput = request.json
        guessed_digit, probabilities = drawAi.guessDigit(model, userInput)
        return {
            "guessed_digit": guessed_digit,
            "probabilities": probabilities
        }
    except Exception as e:
        print(f"Error in aiGuess: {e}")
        return {
            "error": str(e)
        }, 500  # Internal Server Error


if __name__ == '__main__':
    print('begin main')
    model = drawAi.NeuralNetwork()
    model.load_state_dict(torch.load("model.pth",  map_location=torch.device('cpu') ))
    model.eval()
    print('finsih main')
    app.run(debug=True)
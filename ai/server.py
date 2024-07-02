import drawAi
from flask import request
from flask import Flask
from flask_cors import CORS
import torch
from torch import nn


app = Flask(__name__, static_url_path='')
CORS(app)

@app.route('/')
@app.route('/index')
def index():
    return app.send_static_file(filename="index.html")

@app.route('/api/aiGuess', methods=['POST', 'GET'])
def aiGuess():
    try:
        userInput = request.json
        guessed_digit, probabilities = drawAi.guessDigit(model, userInput)
        if probabilities == "NaN":
            probabilitiesStats = []
        else:
            probabilitiesStats = probabilities.tolist()[0]
        return {
            "guessed_digit": guessed_digit,
            "probabilities": probabilitiesStats
        }
    except Exception as e:
        print(f"Error in aiGuess: {e}")
        return {
            "error": str(e)
        }, 500  # Internal Server Error


if __name__ == '__main__':
    print('begin main')
    model = drawAi.NeuralNetwork()
    model.load_state_dict(torch.load("ai/model.pth",  map_location=torch.device('cpu') ))
    model.eval()
    print('finsih main')
    app.run(debug=True, host="0.0.0.0")
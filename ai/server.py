import drawAi
from flask import request
from flask import Flask
from flask_cors import CORS
import torch
from waitress import serve


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
        return {
            "error": str(e)
        }, 500  # Internal Server Error


if __name__ == '__main__':
    model = drawAi.CNN()
    model.load_state_dict(torch.load("ai/model04.pth",  map_location=torch.device('cpu') ))
    model.eval()
    serve(app, host="0.0.0.0", port=5000)
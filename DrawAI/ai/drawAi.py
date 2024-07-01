import requests
import os
import numpy as np
import torch
from torch import nn

class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28*28, 50),
            nn.ReLU(),
            nn.Linear(50, 10)
        )

    def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits

def guessDigit(model, data):
    try:  
        if sum(data) == 0:
            return "/"
        if sum(data) == 784:
            return "NaN"

        with torch.no_grad():  # do not keep track of gradients for training
            data_tensor = torch.FloatTensor(data).reshape((1, 28, 28))
            pred = model(data_tensor)  # RUN NEURAL NETWORK
            return pred.argmax().item()
    except Exception as e:
        print(f"Error: {e}")
        raise e


def updateAiGuess(data):
    data_to_send = {
        'guessed_digit': guessDigit(data)
    }
    url = 'http://localhost:5000/aiGuess'
    response = requests.post(url, json=data_to_send)
    if response.status_code == 200:
        print('Successfully sent data')
    else:
        print('Failed to send data:', response.status_code)

# get req
def getUserData():
    url = 'http://localhost:5000/api/data'
    response = requests.get(url)
    if response.status_code == 200:
        try:
            data = response.json()
            print('Data received:', data)
            return data
        except requests.exceptions.JSONDecodeError as e:
            print('Error decoding JSON:', e)
            return None
    else:
        print('Failed to retrieve data:', response.status_code)
        return None

if __name__ == '__main__':
    # loading model from file
    print('main')
    model = NeuralNetwork()
    model.load_state_dict(torch.load("model.pth",  map_location=torch.device('cpu') ))
    model.eval() # ensures model is in evaluation mode and not training

    # TODO: While loop or some other structure to constantly get and put data
    data = getUserData()  # Send a GET request to retrieve data
    updateAiGuess(model,data)  # Send a PUT request with guessed digit
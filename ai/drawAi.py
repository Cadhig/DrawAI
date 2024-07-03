import requests
import os
import numpy as np
import torch
from torch import nn

class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.softmax = nn.Softmax()
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
            return "/", "NaN"
        if sum(data) == len(data):
            print('true')
            return "NaN", "NaN"

        with torch.no_grad():  # do not keep track of gradients for training
            data_tensor = torch.FloatTensor(data).reshape((1, 28, 28))
            pred = model(data_tensor)  # RUN NEURAL NETWORK
            probabilities = model.softmax(pred) # turn logits into probabilities
            digit = probabilities.argmax().item()
            return digit, probabilities
    except Exception as e:
        raise e

if __name__ == '__main__':
    # loading model from file
    print('main')
    model = NeuralNetwork()
    model.load_state_dict(torch.load("model.pth",  map_location=torch.device('cpu') ))
    model.eval() # ensures model is in evaluation mode and not training

    # TODO: While loop or some other structure to constantly get and put data
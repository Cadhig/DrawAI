import requests
import os
import numpy as np
import torch
from torch import nn

class CNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.softmax = nn.Softmax()
        self.layers = nn.Sequential(
            nn.Conv2d(1,6,5), # 1 channel 28x28 --> 6 channel 24x24
            nn.ReLU(),
            nn.MaxPool2d(2,2), # 24x24 --> 12x12
            nn.Conv2d(6,12,5), # 6 channel 12x12 --> 12 channel 8x8
            nn.ReLU(),
            nn.MaxPool2d(2,2), # 8x8 --> 4x4
            nn.Flatten(), # by default, flattens all axes except 1st (batch axis)
            nn.Linear(12 * 4 * 4, 64),
            nn.ReLU(),
            nn.Linear(64, 10)
        )

    def forward(self, x):
        x = x.view((-1,1,28,28)) # first axis batch size, 2nd axis channels
        logits = self.layers(x)
        return logits

def guessDigit(model, data):
    try:  
        if sum(data) == 0:
            return "/", "NaN"
        if sum(data) == len(data):
            print('true')
            return "NaN", "NaN"

        with torch.no_grad():  # do not keep track of gradients for training
            data_tensor = torch.FloatTensor(data)
            data_tensor = 2*data_tensor - 1.0 # 0 centering inputs (now -1 for blank, 1 for ink)
            pred = model(data_tensor)  # RUN NEURAL NETWORK
            probabilities = model.softmax(pred) # turn logits into probabilities
            digit = probabilities.argmax().item()
            return digit, probabilities
    except Exception as e:
        print("error")
        raise e
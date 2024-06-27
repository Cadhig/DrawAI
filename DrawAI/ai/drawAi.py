import requests
import numpy as np


def guessDigit():
    return np.random.randint(0, 10)

def updateAiGuess():
    data_to_send = {
        'guessed_digit': guessDigit()
    }
    url = 'http://localhost:5000/api/data/aiGuess'
    response = requests.put(url, json=data_to_send)
    if response.status_code == 200:
        print('PUT request successful')
    else:
        print('Failed to send PUT request:', response.status_code)

# get req
def getUserData():
    url = 'http://localhost:5000/api/data'
    response = requests.get(url)
    if response.status_code == 200:
        try:
            data = response.json()
            print('Data received:', data)
        except requests.exceptions.JSONDecodeError as e:
            print('Error decoding JSON:', e)
    else:
        print('Failed to retrieve data:', response.status_code)

if __name__ == '__main__':
    updateAiGuess()  # Send a PUT request with guessed digit
    getUserData()  # Send a GET request to retrieve data
import requests
import numpy as np

def guessDigit(input): return np.random.randint(0,10) # placeholder function for testing

url = 'http://localhost:5000/api/data'
response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print('Failed to retrieve data:', response.status_code)
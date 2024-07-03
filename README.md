# Draw AI
Welcome to Draw AI Number Guesser! This project allows users to draw digits on a 28x28 grid canvas, submit their drawing, and receive an AI-generated guess of the drawn number along with statistical probabilities.

## Features
- **On-Screen Canvas**: Users interact with a 28x28 grid canvas to draw digits.
- **Real-Time Data Transmission**: Canvas data, represented as a 784-indexed array of 1's and 0's (1 for filled, 0 for empty), is sent to the backend in near-real time upon interaction.
- **Backend Processing**: Backend, powered by Python Flask, receives the canvas data and forwards it to an AI model trained on the MNIST database.
- **AI Prediction**: The AI processes the array to predict the drawn number and provides statistical likelihoods for each possible digit.
- **Frontend Display**: React/TypeScript frontend displays the AI's number guess and statistical data in near-real time, enhancing user interaction and feedback.

## Technologies Used
- **Frontend**: React, TypeScript
- **Backend**: Python Flask
- **AI Model**: pyTorch, trained on MNIST dataset for digit recognition

## Getting Started
To run the project locally:
- Clone this repo
- Run `npm install` in root directory
- Run `pip install -r ./ai/requirements.txt` in root directory
- Start application... run `python ai/server.py` and `npm run dev` in root directory <br>
To view the deployed app click here: <br>
https://drawai.onrender.com

## Future Development / Todos
- Replace mock stats with real stats
- Rework UI
- Re-scale canvas

## Contributions
Alexander Ahrens (ahrensaj) for AI model <br>
<br>
Contributions are welcome! If you'd like to contribute to Draw AI Number Guesser, please fork the repository and create a pull request with your proposed changes.

## Process
![image](https://github.com/Cadhig/DrawAI/assets/160413853/8ba39f42-2a79-43bf-ac0e-38366b11c1ba)

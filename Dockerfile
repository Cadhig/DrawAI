FROM python:3

# Set the working directory in the container
WORKDIR /app

# Install Node.js
RUN apt update -y &&\
    apt install nodejs -y &&\
    apt install npm -y

# Install pip dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the working directory
COPY . .

RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["python", "ai/server.py"]
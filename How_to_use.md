# How to use
This is step by step guide to using the employee and the employer side of the package. The guide also contains instructions for setting up the server side of the package.
## Prerequisites
### For setting server:
* Familiarity with AWS Management Console.
* Knowledge of connecting to your EC2 instance for ftp(FileZilla is used in this example) and SSH.

### For employers:
* Active internet connection.

### For employees:
* Have an iPhone with **iOS 10 or above** installed.
* Have a mac with Xcode installed.
* You should be logged in both your devices with the same apple id.


## Setting up
### Server side:
```sh
$ sudo pip install tensorflow
$ sudo pip install keras
$ git clone https://github.com/IndefiniteIntegrals/U-Hacks.git
$ cd U-Hacks
$ sudo apt-get install mongodb
$ npm install
$ nohup sudo mongod --dbpath {{your database path here}} --smallfiles
$ node server.js
```

### Web application (employer side):
1. Enter login link to website. (Register if not already done.)
2. Once logged in, you can upload a csv file in the prescribed format using the upload button on the top left to retrain the deep-learning model.
3. Use the button on the bottom right to start the chat bot.
4. Answer the questions asked by the bot. The ad gets posted automatically based on your responses.

### iOS application (employee side):
1. Open the project in Xcode.
2. Connect your iPhone to your mac.
3. Click on `build and run`  and select your iPhone.
4. Answer the questions asked by the bot.
5. Enter your touchID touwards the end to verify that you are a human.
6. Wait for the results to arrive.

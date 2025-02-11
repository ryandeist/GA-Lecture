# Pets Back-End - Setup

## Setup
Open your Terminal application and navigate to your `~/code/ga/lectures` directory:

```bash
cd ~/code/ga/lectures
```

Make a new directory called `express-api-pets-back-end`, then enter this directory:

```bash
mkdir express-api-pets-back-end
cd express-api-pets-back-end
```

Create `server.js`, `.env`, and `.gitignore` files:

```bash
touch server.js .env .gitignore
```

In the terminal, create a `package.json` with all of the default settings and install the required packages by running the following commands:

```bash
npm init -y
npm i express mongoose dotenv morgan
npm i -D nodemon
```

Open the contents of the directory in your code editor:

```bash
code .
```

Add the following boilerplate code to the `server.js` file:

```js
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(logger('dev'));

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});
```

Add your MongoDB URI to the .env file:

```js
MONGODB_URI=mongodb+srv://<username>:<password>@sei-w0kys.azure.mongodb.net/pets?retryWrites=true
```

### Start the server with `nodemon`
Finally, we are going to add a script to start our server in development mode using `nodemon`.

You should have already installed `nodemon` earlier using the following command:

```bash
npm i -D nodemon
```
> The `-D` flag made this a development dependency. This makes `nodemon` available only during development.

Now we will add a quick script to our `package.json`.

Open your `package.json` file and locate the `"scripts"` section. Add a new script called `"dev"` to run your server with nodemon. It should look like this:

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```
> `start` is for running the server in `production` mode. `dev` is for running the server in `development` mode with `nodemon`.

To use `nodemon` to run your server, simply type the following command in your terminal:

```bash
npm run dev
```
This will start your server and automatically restart it whenever you make changes to your code.

### Install Postman

We will be using Postman during this lesson to interact with our API. If you do not have Postman installed, please refer to the Postman Setup Lab.


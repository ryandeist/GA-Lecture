# MEN Stack Session Auth - Build and Run
## Boilerplate express set-up
Let's begin with the same boilerplate Express code and libraries we've come to know and love. As a quick reminder, this setup includes the esstentials that you've already worked with in previous applications - Express for our web server framework, Mongoose for MongoDB interactions, Dotenv for managing our environment variables, EJS for templating, and Morgan for logging requests. 

Install packages: 

```
npm i express mongoose dotenv ejs morgan method-override
```

Create your `.env` file at the root level of the repo and include your `MONGODB_URI` connection string variable.

```
touch .env
```

The `.env` should look like this:

```
MONGODB_URI=mongodb+srv://ryandeist:JkvacL5c8vvilQga@ryan-cluster.rvulz.mongodb.net/MENSESSIONAUTHLEC?retryWrites=true&w=majority&appName=ryan-cluster
```
Add the following code to `server.js`:

```
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(morgan('dev'));

app.listen(port, () => {
     console.log(`The express app is ready on port ${port}!`);
});

```

## process.env.PORT
The `port` variable is created to assign port to 3000 if no other value is present. This is handy if we are deploying apps and do not or cannot know in advance what port is hosting the application. This typically written as a *ternary* or a condensed if...else statement. 

## Run the Server. 
Lauch nodemon and check to see you are receiving the right logs showing the connection to MongoDB and your PORT. ie:

```
Connected to MongoDB <mongoose-uri>.
The express app is ready on port 3000!
```
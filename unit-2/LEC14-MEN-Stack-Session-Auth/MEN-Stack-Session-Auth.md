# MEN Stack Session Auth

## Concepts
### What is Authentication?:
At its core, authentication is the process of verifying a users identity. It's like asking "Are you really who you claim to be?" In practical terms, this involves implementing a system where users can create an account with a usernam and password. Then, whenever they wish to access certain features or data on our site, they must provide the correct password to prove their identity and continue. 

### Why use Authentication:
As our applications grow more complex, with databases and relationships, it becomes vital to ensure that users can interact only with data that's relavant to their account. This is where authentication plays a critical role. It's the logic that identifies users, granting them access to create, view or modify content specific to their profile. Without authorization, we risk exposing sensitive data or allowing unauthorized modifications, which could compromise the integrity and security of our application and its users. 

## Build and Run
### Boilerplate express set-up
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

### process.env.PORT
The `port` variable is created to assign port to 3000 if no other value is present. This is handy if we are deploying apps and do not or cannot know in advance what port is hosting the application. This typically written as a *ternary* or a condensed if...else statement. 

### Run the Server. 
Lauch nodemon and check to see you are receiving the right logs showing the connection to MongoDB and your PORT. ie:

```
Connected to MongoDB <mongoose-uri>.
The express app is ready on port 3000!

```

## Build a Landing Page
### The Landing Page
For out authentication app, we'll use a landing page to direct users to links where they can sign up or sign in to the authenticated sections of the applications
    
### Define the route
First, let's create a basic route in our `server.js` file. This initial route will simply sent back a text response for us to test. Once that's working, we'll return to it and link our EJS file. Remember, this code, like all express routes, should be placed above the `app.listen()` method. 

```
// GET /
app.get("/", async (req, res) => {
    res.send("Hello World");
});

```

Test the route by browsing to `localhost:3000`. You should see the "Hello World" message. 

Once the route is confirmed working, we can move on. 

### Create a `views` directory and landing page template. 
We're going to need a `views` directory to place all of our templates in. Create that now. 

```
mkdir views
```

Our landing page will an `index.ejs` file that is inside of this directory. Create that also.

```
touch views/index.ejs
```

Next, we'll add basic HTML structure to our `views/index.ejs` file. Inside the `<body>` tag, include some content for display. Also, remember to update the `<title>` tag to reflect the page's purpose. 

```
<!-- views/index.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home Page</title>
</head>
<body>
    <h1>Welcome to the app!</h1>
</body>
</html>

```

Once we have this view setup, configure our app to serve this page in response to requests made to the `/` route. 

Change the existing `res.send()` method to `res.render()` the file we just created. 

```
// GET /
app.get("/", async (res, req) => {
    res.render("index.ejs");
});
```

## Building the User Model
### Setting up a models directory
Create a new `models` directory and a `user.js` file for the User model:

```
mkdir models
touch models/user.js
```

### The `User` model
Applications vary in their implementation of the user model. Some rely on an `email` field, others simply have a `username` as a way to identify and differentiate users. To keep things simple, we'll use `username` and `password` for our two fields. For authenication to work properly, we need both field to be required in the user schema.

Add the following to `user.js`:

```
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

## Controllers 
### Create controllers 
Since we're building an authentication app, we should anticipate the need for multiple models in the future. After all, users will want to create and manage resources, not just sign in and out. 

So, this means splitting off the routes for authentication into a separate filem so we can have a clean distinction between routes for auth and routes for other models being managed by users. This allows our authentication app to be a hgihly re-usable, modular code base that provides a starting point for any number of future applications.

Lets start by making a `controllers` directory and `auth.js` file for the functions that handle incoming requests:

```
mkdir controllers
touch controllers/auth,js
```

This file will look similar to the way we set up routes in `server.js`, with one key exception: an express built-in `router` object will replace the `app` object, and we can plug in that `router` object later in `server.js`.

Add the following to `controllers/auth.js`:

```
const express = require("express");
const router = express.Router();

module.exports = router;
```

Now, let's import the `authController`, which always contains out `router` object, into `server.js`. This should be done right after we declare the `port` variable. 

```
const authController = require("./controllers/auth.js");
```

After importing, we'll instruct our Express app to use this `authController` for handling requests that match the `/auth` route

To do this, add the following line in `server.js`, just below where we've defined our home page:

```
app.use("/auth", authController);
```

With this code in place, Express will now funnel any requests starting with `/auth` as its base. Therefore, within the `auth.js` file, we only need to specify the remaining part of the URL path, excluding `/auth`, for each route. 

For example, the controller route for `/auth/sign-up` in the `authController` will look like this:

```
router.get("/sign-up", (res, req) => {
    res.render("auth/sign-up.ejs");
});
```

The full URL to access that route from a browser would be `/auth/sign-up`

## Build the Sign-Up page
### Create the Sign Up page
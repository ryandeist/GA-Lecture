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
To begin our authentication journey, we will need to be able to create new user accounts. Let's start by creating the template with the form for creating a new user. 

Create a new `auth` directory inside of `views`. This will hold views specific to our authentication routes. Withing `views/auth/` create a `sign-up` template: 

```
mkdir views/auth
touch views/auth/sign-up.ejs
```

This template will have a simple form, like so:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign Up</title>
  </head>
  <body>
    <h1>Create a new account!</h1>
    <form action="" method="">
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" />
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" />
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />
      <button type="submit">Sign up</button>
    </form>
  </body>
</html>
```

Note the use of `type="password"` on our password input. This results in the classic hidden text, replaced by dots, that all password inputs should have across all applications

We've also set up a `confirmPassword` field to ensure users aren't the victims of typos when creating their new account. These fields must match before we can create their account. We'll check for that, among other things, in the controller function.

### Adding navigation link to the landing page
This is a good time to add a simple link to our landing page so a new user can directly navigate to the sigh up page: 

In `views/index.ejs`:

```
<a href="/auth/sign-up">Sign up</a>
```

### Defining the route
Now that our authenication routes are defined in a separate controller file, our route handler function will look a little different.

Add the following to `controllers/auth.js`:

```
router.get("/sign-up", (req, res) => {
  res.render("auth/sign-up.ejs");
});
```

Remember, we're using a `router` object defined by express instead of the `app` object we're used to. so all the routes should be defined with `router` instead of `app`. 

### Test the route
To test the route, visit `localhost:3000/auth/sign-up` in the browser. The `server.js` file handles the `/auth` section of the URL, and the `sign-up` is handled by the controller function we just wrote! 

## Create a user
### Get to the action
For our form to make submissions to the server, we need to modify the `action` and `method` properties to send a `POST` request to the `/auth/sign-up` route.

Modify the following in `views/auth/sign-up.ejs`: 

```
<form action="/auth/sign-up" method="POST"></form>
```

### Define the route
Now, we need to create the controller function handling this request. Let's start with a simple `res.send` response so we can test as we go. Note the use of `async`, as this function will eventually require a database call. 

Add the following in `controllers/auth.ejs`:

```
router.post("/sign-up", async (req, res) => {
  res.send("Form submission accepted!");
});
```

Since we want this route to create a new `User` in the database, we'll first need to import the `User` model into this file. 

Add the following at the top of `controllers/auth.ejs`:

```
const User = require("../models/user.js");
```

It would be **great** if we could use a simple `User.create` statement in the route nd proceed. Unfortunately authentication is a bit more complicated than that. 

For our app to be secure and functional, we need to make the following considerations: 
1. Usernames need to be unique: two people can't share the same username.
2. The password and confirmPassword must match to verify there are no typos.
3. Passwords cannot be stored directly as plain-text in the database, this is not secure. 

### Enforcing unique usernames
To make sure somebody hasn't already taken the username being submitted, we need to check the database for any existing user with that username.

Add the following to the route handler function: 

```
const userInDatabase = await User.findOne({ username: req.body.username });
if (userInDatabase) {
  return res.send("Username already taken.");
}
```

### Checking `password` and `confirmPassword`
This check will be a little simpler, as we only need a simple comparison of values already submitted through the form: 

Add the following inside the route handler function, below the user validation: 

```
if (req.body.password !== req.body.confirmPassword) {
  return res.send("Password and Confirm Password must match");
}
```

### Securely storing passwords
If all the previous validations are successful, we're ready to create the user in our database. However, storing passwords as plain text is a security risk. In the even of a database breach, plain-text passwords could be easily accessed by hackers. This is particularly concerning since many users often reuse the same passwords across different applications: A security nightmare. 

For this and most security-related problems, we should not attempt to solve this ourselves. Instead, it's better to rely on established, third-party tools designed for security. These tools ensure that passwords are securly encrypted before being stored in the database. For this, we'll use [`bcrypt`](https://www.npmjs.com/package/bcrypt), a widely recognized hashing library.

Using the `bcrypt` library, we will perform what is called a `hashing` operation which will scramble the user's password into a difficult to decrypt string. The hashing function also requires the use of a `salt` string, which ensures that even if two users have the exact same passwords, we end up with different encrypted strings in the database. 

First, install the bcrypt package and import it at the top of the `controllers/auth.js` file:

```
npm i bcrypt
```

```
const bcrypt = require("bcrypt");
```

Next, add the following lines to the route handler function, beneath our previously written validations: 

```
const hashedPassword = bcrypt.hashSync(req.body.password, 10);
req.body.password = hashedPassword;
```

The number `10` in the `hashSync` method represents the amount of salting we want the hashing function to execute: The higher the number, the harder it will be to decrypt the password. However, higher numbers will take longer for our application when we're checking a user's password, so we need to keep it reasonable for performance reasons. 

With all of our validations in place, we can finally create the new `User` in the database: 

```
// validation logic above

const user = await User.create(req.body);
res.send(`Thanks for signing up ${user.username}`)
```

### Test the route
You should now be able to navigate to `localhost:3000/auth/sign-up` and create a new user account through the form. You can validate that the password was properly encrypted by viewing the user in MongoDB Atlas. 
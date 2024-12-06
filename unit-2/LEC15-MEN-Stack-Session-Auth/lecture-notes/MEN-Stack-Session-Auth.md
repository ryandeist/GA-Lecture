# MEN Stack Session Auth




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

## Build the sign in page
### Creating the sign in template
Now that users have the ability to sign up for an account, the next step is to create a form for them to sign ***in*** to the application. This sign-in form will closely resemble the sign up page, but with a few key differences: we'll omit the `confirmPassword` field, and the forms `action` will direct to a different URL. 

First, create a new `sign-in.ejs` template in the `views/auth` directory:

```
touch views/auth/sign-in.ejs`
```

Add the following HTML boilerplate to `sign-in.ejs`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign In</title>
  </head>
  <body>
    <h1>Sign in</h1>
    <form action="/auth/sign-in" method="POST">
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" />
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Sign in</button>
    </form>
  </body>
</html>
```

### Define the route
Next, we can add a simple route to our `authController` to render this template:

```
router.get("/sign-in", (req, res) => {
  res.render("auth/sign-in.ejs");
});
```

### Add a navigation link to the sign-in page
Finally, add a link on our landing page for the sign in page

In `views/index.ejs`:

```
<a href="/auth/sign-in">sign in</a>
```

Test the route. 

## Sign the user in
### Define the route
Once a user submits their request from the sign in page, we need a route set up to handle this request. Let's start with the simpliest, testable version of this route, so we can immediately confirm a working form submission.

Add the following in `controllers/auth,js`:

```
router.post("/sign-in", async (req, res) => {
  res.send("Request to sign in received!");
});
```

### Confirming a `User` exists
First we need to grab the user from the database, using the username provided in the form. If there is no such user, we have out first failure condition, and can send back an appropriate response. For security reasons, we recycle the same vague message for all sign in failures, so that a prospective hacker won't have any clues about what exactly is failing. 

Add the following in the route handler function:

```
const userInDatabase = await User.findOne({ username: req.body.username });
if (!userInDatabase) {
  return res.send("Login failed. Please try again.");
}
```

### `Bcrypt`'s comparison function
Inside this route, we will again rely on `bcrypt` to determine if the entered password matches the one stored in the database. The `bcrypt` library as a `compareSync` method to check if the plain-text password entered by the user matches the hashed password in the database. It hashes the user's input with the same method used for the stored password and compares the two hashes. This method returns a `true` or `false` response based on whether the passwords match. If the result is `false`, we send the same failure message as before. 

Add the following beneath the previous validation:

```
const validPassword = bcrypt.compareSync(
  req.body.password,
  userInDatabase.password
);
if (!validPassword) {
  return res.send("Login failed. Please try again.");
}
```

### Session-based authentication
If the route handler function has gotten this far, it means me have a successful attempt to sigh in to the application. Great, now what.

There are various methods to manage signed-in users in applications. For ours, we've chosen to implement a ***session-based*** authentication strategy.

Let's talk about `cookies`, which are central to this approach. `Cookies` are small pieces of data stored on your browser. You've likely encountered numerous websites asking if you're okay with them using `cookies`. Originally, these were widely employed by advertisers to track your activity across the internet and even shared across companies in a vast conspiracy of targeted ads. 

But `cookies` have their good sides too. They're what allow e-commerce sites to remember what's in your shopping cart, even if you accidently close the tab or browse away. 

![diagram of cookies with shopping cart](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/men-stack-session-auth/sign-the-user-in/assets/cookie-cart.png)

Now, the catch with `cookies` is that they reside in the browser, making everything in them accessible to the user. That's why we can't store sensitive data like passwords in `cookies` - the front-end isn't secure.

In our **session-based** strategy, however, we use `cookies` differently. They'll hold encrypted information about the signed-in user, which only our server can decrypt. This encrypted information forms a `session`.

When a user signs into our application, they start a `session` thats marks them as authenticated. 

![req/res cycle for session auth](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/men-stack-session-auth/sign-the-user-in/assets/login.png)

Future requests from this user will this `session` in their browser cookie. Our server reads this `session` to verify the requesst is from a signed-in user and, if so, identify who that user is. 

![future requests from a signed-in user](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/men-stack-session-auth/sign-the-user-in/assets/req-with-session.png)

If a request is made to a protected route without this `session`, the server responds with an error message.

![requests made without a session cookie](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/men-stack-session-auth/sign-the-user-in/assets/access-denied.png)

### Setting up sessions on the server. 
Sessions are another part of authentication best left to established third party libraries. Se we'll need a new package to use sessions in our express application:

```
npm i express-session
```

Since we're encrypting and decrypting information from a `session` object, we'll need to create a new environment variable called `SESSION_SECRET` that is used in the encrypting and decrypting process. We to keep this string secure, or else anyone would be able to decrypt and read the information stored in the `session`.

Add a `SESSION_SECRET` variable to the `.env` file:

```
SESSION_SECRET=secret-string-unique-to-your-app
```

This string can be anything you want. 

### Managing sessions 
Every time a user accesses a route in our application, we'll likely need to perform actions related to their `session`, which sounds like a great case for middleware! This middleware will automatically manage session data for each user request, ensuring a seamless and secure user experience throughout our application. 

Before you can use session management in your Express app, you need to include the express-session module. Add the following to the top of `server.js`, after the other require statments:

```
const session = require('express-session');
```

Then add the following in `server.js` at the bottom of our middleware stack:

```
app.use(methodOverride("_method"));
app.use(morgan('dev'));
// new
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
```

This code integrates session management into our application using the `express-session` library. It configures the session middleware to securely manage user sessions with a secret key, specifies not to resave sessions that haven't changed, and allows for storing new, unitialized sessions. 

### Creating a session for an authorized user.
Now that we've set up out session middleware. we can finalize the sign-in route in our route handler. After a user's request sucessfully passes the initial validations, our next step is to establish a new session for them. This involved storing their username in the session. By doing so, we can identify and authenticate the user for their future requests to our application. 

With the addition of our middleware, a `session` object has been attached to all incoming requests, so we can access it in routes through the `req` object directly: 

```
req.session.user = {
  username: userInDatabase.username,
};
```

This code sets the user retrieved from the database as the user in the newly created session. 

Once that's done, we can simply redirect to the landing page for now. 

```
res.redirect("/");
```

### Full Route Handler
To recap, here is what the full route handler function should look like: 

```
router.post("/sign-in", async (req, res) => {
  // First, get the user from the database
  const userInDatabase = await User.findOne({ username: req.body.username });
  if (!userInDatabase) {
    return res.send("Login failed. Please try again.");
  }

  // There is a user! Time to test their password with bcrypt
  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  );
  if (!validPassword) {
    return res.send("Login failed. Please try again.");
  }

  // There is a user AND they had the correct password. Time to make a session!
  // Avoid storing the password, even in hashed format, in the session
  // If there is other data you want to save to `req.session.user`, do so here!
  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id
  };

  res.redirect("/");
});
```

### Modify the landing page and the `index` route
To test the functionality of user sign-in, we need to update our landing page to reflect the user's sign-in status. This is done by utilizing the `req.session` object, which is now attached to every request due to our `session` middleware. 

Here's how:
* In our landing page's route, we're going to send a `user` variable to our `index.ejs` template. This variable is assigned the value of `req.session.user`, a property we just set during the sign in process. 
* If a `user` is `undefined` (which happens when `req.session.user` is not set), it means the visitor isn't signed in. In this case, our template will treat them as a guest, showing the option to sign in or sign up. 
* If `user` has a value (meaning `req.session.user` is set), the visitor is recognized as a signed-in user. We can personalize their greeting and omit the sign-up and sign-in links, as they are already authenticated. 

First, change the route in `server.js` to the following:

```
app.get("/", (req, res) => {
  res.render("index.ejs", {
    user: req.session.user,
  });
});
```

Then, add some logic to the `index.ejs` template like so:

```
<% if (user) { %>
<h1>Welcome to the app, <%= user.username %>!</h1>
<% } else { %>
<h1>Welcome to the app, Guest.</h1>
<p>
  <a href="/auth/sign-up">Sign up</a> or <a href="/auth/sign-in">sign in</a>.
</p>
<% } %>
```

### Test the sign in
You should now be able to test all of this functionality through the application directly. Failed sign in attempts should simply result in a message shown in the browser, and require you to navigate back to the sign in page. A successful sign in should result in seeing the landing page again, with a personalized greeting. 

Note, however, everytime you restart the server, the version of the seesion object being stored in the server's memory is deleted, and it will as though you never signed in! If you make any modifications that restart the server, you will have to sign in all over again. 

We will learn about a solution to store sessions in MongoDB rather than a servers local memory soon. 

## Sign the user out
### Signing the user out
Now that we're creating sessions when users sign in, we can simply delete those sessions when a user wants to sign out. 

Let's start by adding a link on the landing page for users to sign out. We only want to show this link if there is a currently signed in user, so we should put it inside the same conditional that displays that user's name. 

In `views/index.js`

```
<% if (user) { %>
<h1>Welcome to the app, <%= user.username %>!</h1>
<p>
  <!-- new sign out link -->
  <a href="/auth/sign-out">Sign out</a>
</p>
<% } else { %>
<h1>Welcome to the app, guest.</h1>
<p>
  <a href="/auth/sign-up">Sign up</a> or <a href="/auth/sign-in">Sign in</a>.
</p>
<% } %>
```

### Define the Route
The sign in link will send a `GET` request to `/auth/sign-out`, so we should prepare to accept that request in the auth controller. Let's set up a minimal route with a `res.send` for testing purposes. 

Add the following to `/controllers/auth.js`:

```
router.get("/sign-out", (req, res) => {
  res.send("The user wants out!");
});
```

To sign a user out, we need to get rid of the session attached to the `.req` object. Luckily for us, the express session object had a built-in method conveniently named `destroy`, allowing us to easily delete the session using `req.session.destroy`.

After signing out, most applications will redirect the user back to the landing page, so let's do just that. 

The final controller method should look like this:

```
router.get("/sign-out", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
```

### Test sign out
Thats all there is to signing out. We should be able to manually test the application by signing in, seeing our username on the landing page, and clicking the sign out button. 

## Protecting Routes 
### Protecting Routes
In many web applications, you aren't able to see any of the good stuff until you're a logged in user. Most sites also don't want to allow you yo create things in their database as an unauthenticated user, so they'll provent you from ever reaching a form to do so. We can refer to this concept as **protecting routes** from unauthenticated users. 

There are many ways to implement this concept, and for our application, we'll stick with the most straightforward approach of using and `if` check to determine if there's a user attached to a given request. 

### The VIP Lounge
To practice this concept, we'll add a special route just for signed in users to access: the VIP Lounge. We'll present this link to every user on the landing page, but if you're not signed in, the controller function will send you a discouraging message rejecting you from the club. If you **are** signed in, we'll give the user a simple `res.send` message greeting them to the VIP lounge: No need to overcomplicate the example.

Let's start by adding an enticing VIP Lounge link to the landing page, outside of any conditionals.

In `views/index.ejs`:

```
<p><a href="/vip-lounge">Get into the VIP Users Only lounge!</a></p>
```

We can now create a route handler for the `/vip-lounge` requests, and since this route won't need to be re-used in future applications, let's just add it to `server.js`

In `server.js`:

```
app.get("/vip-lounge", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the party ${req.session.user.username}.`);
  } else {
    res.send("Sorry, no guests allowed.");
  }
});
```

Note the clean, simple `if` statement that relies on truthiness of the `req.session.user` value. The `res.session.destroy` method would have eliminated any properties on the `session` object, so if the user has signed out, this property wont exist. 

You should be able to test this route as both a signed in user and a guest. 

### Real applications and protected routes.
Protected routes are common to nearly all web applications, and serve a number of different functions: 
1. **Securing personal content**: These routes ensure that private content, such as user profile pages, is only accessible to the owner. It prevents unauthorized access to someone elses personal information. 
2. **Controlling resources**: Protected routes are used to restrict creation, updating, and deletion of resources on the website to users who are authenticated. This means only logged in users can perform these actions, safeguarding the site from unauthorized changes. 
3. **Managing Content Ownership**: They enable the application to restrict certain actions, like editing or deleting a post, exclusively to the user who created that post. This helps maintain content integrity and ownership rights within the application.

Many functions of protected routes are related to **authorization** in addition to **authentication**, which sound similar but have a key difference:
* **Authentication**: confirms that you are who you say you are. The app recognizes you. 
* **Authorization**: confirms that you are allowed to do something specific. The app lets you do something because of who you are. 

Simply put, being a signed-in user doesn't give you total power over everything in an application, and we rely on the logic of protected routes to allow users to manage their specific resources, without letting them alter anyone else's. 

## Recap
### Recap
We've completed an express application in which users can sign up for a new account, sign in to the app, view resources restricted to signed in users, and sign themselves out. This was a big project, so it's worth reviewing the key aspects from each of the major steps we took. 

### Modularization of the controllers
We have some great news for you: Once you've written authentication once, you can reuse it for all your future express applications. This is why we separated our routes into a new `controllers` directory that you can easily copy into future projects. While we didnt create a second model in this application, you can imagine that future applications will start with a User as the very first model, then add more models for the resources users are allowed to create and manager in the app. Nearly all of the app ideas swimming around in your head are apps that incorporate users, authentication, and all the concepts that go with them, so it's a great template to kickstart your next express application. 

### Session-based authentication
For this application, we chose session-based authentication as our strategy. This relies on cookies, stored in both the browser and the server's internal memory, encrypted using a `SESSION_SECRET` environment variable. This cookie gets attached to all future requests coming from users of our site, and our server will check to confirm that the user hasn't assed anythin to the cookie that doesn't match the version stored in the server. 

### Encrypted passwords
One very, very important thing we did was to encrypt the user's passwords before storing them in the database. If you remember only one thing from this experience, make it this: **never store passwords in plain text**.

In line with best practices for security-related programming, we've chosen to use the industry-standard `bcrypt` library for our cryptographic needs. This approach teaches an important lession: whenever possible, it's wise to rely on tools that are well-established and trusted in the industry. These tools have been rigorously tested and are widely used by major players in the field. Remember, when it comes to security, especially cryptography, it's not advisable to create your own solutions from scratch. Trust in proven/tested methods. 

### User model contraints
We used a simple `if` statement to determine whether a `username` was already taken, and this should work for our demo applications. For production-ready applications, however, you'd want a bit more validation than that. For example, in our application, `spongebob` and `sPoNgEbOb` would be two totally separate usernames thanks to the difference in capitalization. Not great.

In most applications, a common practice is to store the `username` in the database in all lower case. This approach ensures consistency and avoids issues with case-sensitive login processes. Alongside this, applications often include a separate `display name` field. This field allows use the flexibility to customize their name's capitalization and style as they wish. It's a user friendly feature that lets individuals express themselves while keeping the underlying login mechanism straightforward and reliable. Many social media tags work this way: you can change your display name daily if your like, but the actual `username` handle remains static. 

There's also the concept of using emails to validate accounts before permitting them to do certain things in the app. The `email` field would also have to be unique to each user model, and it could be used to send a special link through email to new users requiring them to validate before continuing in the app. We would also rely on this email when implementing functionality for resetting a forgotten password, which brings with it even further challenges. 

### The end for now
For now, username validations, email verification, and resetting passwords are all well beyond the scope of our intro to authentication, but we want to give you an idea of the many authentication related tasks that a mature, production-ready application needs to consider. You have enough here in our authentication template to create a great portfolio-worth demp app, but not quite enough to start signing up users who expect your app to work like more mature applications in the real world. 

Fortunately, since these needs are mostly the same for all applications, there are plenty of ready-made libraries and solutions out there competing for developer adoption. For express in particular, `passport.js` is a common authentication solution that's relatively easy to plug in, and allows you to add social authentication such as signing in with google accounts.

There are also pleny of minor optimizations in the Level Up section of this module, including saving sessions on to your MongoDB database, creating a smoother experience of signing in automatically after signing up and more. 

## Saving Sessions in MongoDB
### Saving sessions in MongoDB
You're probably here because its quickly become very annoying to lose your session everytime the server restarts, and testing your express app has become an endless struggle of signing in before being able to do anything. Storing anything in the internal memory of the server is not ideal, so let's fix that by using an npm package that stores our session data in MongoDB.

First, install the package [connect-mongo](https://www.npmjs.com/package/connect-mongo) from the command line:

```
npm i connect-mongo
```

Next, we'll set things up in `server.js` to modify our session settings and tell `express-session` to use MongoDB as its chosen storage location.

First, add the import of `MongoStore` right below all of out other require statements, just under the session require statement. 

``` 
const MongoStore = require("connect-mongo");
```

Then, we modify the session `app.use` state to include a `store` property inside the options object provided to our session middleware. If you're wondering where we got this from, it's straight from the connect-mongo documentation.

```
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);
```

### WARNING: Session modification are now async
Previously, our sessions lived in the internal memory of the server, so we didn't need to worry about the time it took to update these objects before proceeding to the next line of code. 

Now that the sessions live in MongoDB, however, any updates to the session object are asynchronous operations that take just as much time as any of the other database calls throughout our app. This means we need to wait for the operation to complete before proceeding the next part of the user's journey. 

For example, if you tested the app in its current state, you'd find that signing out produces a bug call a **race condition**: While the controller function moves happily along from `req.session.destroy` to `res.redirect("/")`, the redirect might finish before the session has had time to actually update, so the landing page will still display the username and greeting, despite the fact the the user just tried to sign out. Not great. 

This means we have to go in to all the controller functions that modify `req.session` and revise them to use the asynchronous **callback** pattern provided by `express-session`. 

### Modifying the sign in controller
Fortunately, this is a pretty straightfoward fix. All we need to do is update the very end of our controller function from the sychronous pattern: 

```
req.session.user = {
  username: userInDatabase.username,
};

res.redirect("/");
```

... to an asynchronous pattern providing a callback function to the `req.session.save` method

```
req.session.user = {
  username: userInDatabase.username,
};

req.session.save(() => {
  res.redirect("/");
});
```

### Modifying the sign out controller
Similarly, we want to avoid the race condition described above in our sign out process, so let's update that using the same pattern. 

```
req.session.destroy(() => {
  res.redirect("/");
});
```

## Sign In on Sign Up
### Sign 'em up, Sign 'em in!
A typical user flow for most applications will automatically sign a new user right in after they've created a new account. This makes sense, considering you've just gotten all the same details from the user that they'd need to sign in, and it's kind of redundant to make them go back and fill out a nearly identical form to sign in right after they've signed up. 

Let's make our user exepreince better and do this for them in our app. 

Briefly, we'll copy the same code from our `sign-in` controller into our `sign-up` controller, and change the redirect statement to go from `/sign-in` straight to the landing page `/` route. 

Add the following to `controllers/auth.js` right beneath the `User.create` statement in our sign up route:

```
req.session.user = {
  username: user.username,
};

req.session.save(() => {
  res.redirect("/");
});
```

## Protecting Routes with Middleware
### The three parameters of custom middleware
When writing a custom middleware function, recall that we want three parameters instead of the usual two parameters our route handlers have been using: 

**req** is the request object, **res** is the response object, **next** is the third parameter, representing the next function in the long line of middleware and route handlers that a request is processed through. 

Unlike endpoint handlers, which typically use the response object `res` to send data back to the user, middleware functions are designed to perform a task and then proceed to the next step in the request response cycle. This is achieved by calling the `next()` callback function. 

Imagine we have a middleware function that we want to use in a specific context. For example, we can apply it to a route like `/vip-lounge`, ensuring that only authenticated users can access it: 

```
app.use(
  "/vip-lounge",
  (req, res, next) => {
    if (req.session.user) {
      res.locals.user = req.session.user; // Store user info for use in the next function
      next(); // Proceed to the next middleware or controller
    } else {
      res.redirect("/"); // Redirect unauthenticated users
    }
  },
  vipsController // The controller handling the '/vip-lounge' route
);
```

This approach works well when you need to apply this middleware logic to just one controller. However, if you need to use the same middleware across multiple controller, this method might become repetitive. In such cases, we'd look for a more scalable way to integrate our middleware.

### Refactoring route protection with middleware
So far, we've protected our route by putting a simple `if` statement inside the route itself. You can imagine, however, that this would be repeated many times throughout our application, as many routes should be protected from unauthenticated or unauthorized users. Sounds like an opportunity to modularize and refactor - are we having fun yet? 

Express' relatively non-opinionated nature means we'll probably want several custom-writtenn middleware functions plugged into our request pipline. Let's anticipate this and create a while new directory dedicated to our custom middleware functions, and create our first route protection middleware inside this directory. 

```
mkdir middleware
touch middleware/is-signed-in.js
```

We can otherwise move the same logic from our existing VIP Lounge route and put it into this middleware function. 

In `middleware/is-signed-in.js`: 

```
const isSignedIn = (req, res, next) => {
  if (req.session.user) return next();
  res.redirect("/auth/sign-in");
};

module.exports = isSignedIn;
```

This function checks if `req.session.user` exists and if it does, it allows the request to continue on the normal chain by invoking `next()` and returning. If this check fails however, it moves to redirect the user to the sign in page, strongly suggesting to the user that, to get where they want to go, they'll have to sign in. 

An extreme bonus challenge for you might to use session, or query parameters, to store the URL they were **trying** to get to, and changing the sign-in flow to redirect them back to that route once they've finished signing in. You have seen this in the URL bar of many real world applications: `?redirectURL=profile`, for example. 

### Plugging in the middleware.
Now we can refactor our `vip-lounge` route to include this middleware before reaching the regular route handler. 

First, we'll need to import the middleware function at the bottom of our growing list of `require` statements in `server.js`:

```
const isSignedIn = require("./middleware/is-signed-in.js");
```

Interestingly, a route controller can accept any number of handler functions as inputs, so we can just add this function directly before the `(req, res)` callback in `server.js`:

```
app.get("/vip-lounge", isSignedIn, (req, res) => {
  res.send(`Welcome to the party ${req.session.user.username}.`);
});
```

For future routes that require the user to be signed in, you can now simply import the middleware function we've created and plug it in the exact same way. 

## Making the `User` Session available to all views. 
### The magic of `res.locals`
In our web application, it's not just the protected routes that might need access to the signed-in user's information. Consider a common feature like a navbar, which typically changes its display based on the user's authenication status - showing a `sign-in` button for guests and a `sign-out` button for logged in users. To make this work, ***every template*** in our application needs access to user information stored in the session. 

Now, we could add the user information to the context object of every `res.render` call throughout the app. However, this approach is not very efficient or maintainable. It's not very DRY and prone to errors, especially in a large appication where you might miss adding this information in some routes.

A more elegant solution in Express is to use the `res.locals` object. This object is part of every request in Express and is specifically designed for situations like ours. Any property added to `res.locals` becomes automatically available to all rendered templates. This means we can set user information once in `res locals` and it will be accessible in every template without the need to repeatedly pass it in a render function. 

Here's how it works in practice: 

```
res.locals.magicNumber = 13;
res.render("/some-template.ejs");
```

In this example, `magicNumber` is now available in `some-template.ejs`:

```
<p>The magic number is <%= magicNumber %></p>
```

Similarly, we can set the signed-in users information in `res.locals` to make it universally accessible across all templates, simplifying our code and reducing the risk of inconsistencies.

### Creating our Middleware
Let's add a new file to our `middleware` directory:

```
touch middleware/pass-user-to-view.js
```

This file will contain a middleware function that assigns the user information from the session to `res.locals` By doing this, we ensure that the `user` property is available in all templates that are rendered after this middleware has been executed. 

In `middleware/pass-user-to-view.js`:

```
const passUserToView = (req, res, next) => {
  res.locals.user = req.session.user ? req.session.user : null;
  next();
};

module.exports = passUserToView;
```

If `req.session.user` exists (meaning the user is signed in), we assign this value to `res.locals.user` If `req.session.user` is not present (the user isn't signed in), we set `res.locals.user` to null. 

This logic could also be implemented with an `if...else` statement, but the ternary operator offers a more streamlined approach. The key takeaway is that regardless of the method used, we're ensuring that every template can check the `res.locals.user` variable to determine the user's sign-in status.

### Plugging in our middleware
First, we need to add the import statement to out stack of `require` statements in `server.js`:

```
const passUserToView = require("./middleware/pass-user-to-view.js");
```

Next, we need to think strategically about where to place this middleware withing the request processing pipeline. Since our aim is to make the `user` variable available to all view routes, it's crucial to insert this middleware early in the route chain. However, it's also important that it comes after our `session` middleware, as it relies on session data.

With this in mind, we should add our `passUserToView` middleware immediately after the session middleware in `server.js`. This ensures that every request has access to the user session data before reaching any route endpoints. 

Here's how we add it to the middleware stack:

```
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
// Add our custom middleware right after the session middleware
app.use(passUserToView);
```

### Refactoring the Landing page route
If this middleware works properly, it means no other route should ever need to add `req.session.user` to the context object being provided to a render statement. Let's test this out by removing the context object from our landing page route, and simplifying it back down to the following: 

```
app.get("/", (req, res) => {
  res.render("index.ejs");
});
```

The user should still show up on this page thanks to our middleware! If you want to create a standard navbar with sign-in/sign-out buttons, now would be the time to do so. All templates will have access to a `user` variable you can create conditionals around. 

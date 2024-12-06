# Intro to Express

## Concepts:
### Introduction to the Express framework:
The most widely used JavaScript framework for Node.js. It is flexible and minimalistic, which simplifies the process of building robust server side applications.
#### Why choose Express?:
- Simplicity and Control: Express' minimalistic nature means less initial overhead doe developers and more control over the architecture and features of their applications. 
- Versatility:
    * Web Applications: Serving dynamic HTML content
    * Web Servers: Handling static and dynamic requests
    * APIs: Creating endpoints for client-server communication

In this module, we'll focus primarily on developing web applications using Express:

### Core Functionalities of Web App Frameworks 
Express exemplifies the key features of web application frameworks, which are essential for building efficient server-side solutions:

1. Routing: Defining routes (URLS) that client apps can request, crucial for organizing parts of your application. Processing incoming requests, parsing data, and making decisions based on the route and HTTP method
3. Response Generation: Combining data with templates to create dynamic content, or directly sending data as a response to client requests. 

Understanding these concepts is vital for developing web applications that are responsive, dynamic, and user-friendly. 



## Building our First Route:
### Introduction to Express Routing: "Hello World!":
In programming tradition, the first step in learning a new language or framework is writing "Hello, World!" program. Let's create our first Express route to displat "Hello, World!" in the browser using the Express app structure we've set up.

#### Writing our first Route:
In Express, -routes- handle incoming requests to the server based on the HTTP method and the request path. We'll start with a simple `get` route:

```javascript
app.get('/', (req, res)=> {
    res.send('<h1>Hello Home!</h1>'); 
    //sends response back to client
});
```

> A -route- in web development is a specified path or endpoint in a web application that determines how an appication responds to client requests to a particular URL patter. 

> Other Express methods include `post`, `put`, and `delete`, which map to the HTTP verbs of the same names. 

Lets review the route components:

- HTTP Method: We use the Express `app.get()` method, corresponding with the HTTP `GET` request
- Path Arg: The first argument `'/'` signifies the root path (`localhost:3000` on your local server).
- Callback Function: The second argument is a callback function that Express calls when the route is matched. It takes two params. 
    - `req`: The Request Object, providing request details
    - `res`: The Response Object, used to send a response back to the client. 

> Routes will always have a callback function with both `req` and `res` as params. When writing your callback function, be careful no to flip these. 

> In Express, all strings that define path should start with a `'/'` character.
                
#### Testing our Route
Check to make sure your server is still running. 

Visit localhost:3000, "Hello, World!" should be displayed. 

#### Updating our Route
Let's modify our route to respond with "Hello Express!" instead. 

```javascript
app.get('/', (req, res)=> {
    res.send('<h1>Hello Express!</h1>'); 
    //sends response back to client
});
```

## URL Parameters:
### Understanding URL/Route Parameters
URL Parameters, also known as Route Parameters, are akin to function parameters but within the context of URL paths. They allow dynamic data, like identifiers for specific resources, to be passed through the URL path of an HTTP request.

In simpler terms, it allows us to pass small amount of information from the browser to the server via the URL. 

#### URL Params in Express:
In Express, we define these patameters in the path string, using a colon `:` followd bt the param name. 
```javascript
app.get('/:itemNumber', (req, res) => {
    // accessing the parameter
    console.log(req.params); 
    console.log(req.params.itemNumber);

    // sending a response with the parameter
    res.send(`<h1> Item ${req.params.itemNumber}</h1>`);
});     
```
> Just like parameters in JavaScript functions are placeholders for actual values passed during function invokation, URL params are placeholders in route definitions. The actual values are provided in the URL when a request is made from the browser. 

#### Testing the Browser
Try visiting `localhost:3000/123` and `localhost:3000/456` in your browser. Notice how the item number in the `console.log` and `<h1>` response changes according to the URL. 

How this works: 
* The path `/:itemNumber` is a template. When a requet like `localhost:3000/123` is received, Express maps `123` to `itemNumber`, which is then accessible via `req.params.itemNumber` on the request object. 

#### Example with req.params:
* If you `console.log(req.params)` in the route above, you'll get an output like `{itemNumber: 'Ryan'}`, depending on the request URL. 

### Route Order and URL Parameters:
When planning you routes in Express, the order of route definitions is crucial when working with URL parameters. 

Take a look at the routes below: 

```javascript
app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});
```

```javascript
app.get('/about', (req, res) => {
    res.send('About Page');
});
```

* In the provided example, the first route `/:name` is dynamic, meaning ut uses a route parameter `:name` to match any URL path that starts with a / followed by any string. This pattern is quite broad and will match a wide range of URLs including something like `/about`

* The issue arises because this general pattern also matches the specific URL `/about`. As a result, a request to `/about` gets intercepted by the first route `/:name` instead of reaching the intended `/about` route.

* This behavior makes the specific `/about` route essentially unreachable, as the server always respons with the **first matching route it encounters**, which in this case is the more generic `/:name` route. 

* To prevent this, it's important to order routes carefully in Express. More specific routes, like `/about` should be defined **before** more generic routes. 

### Query Parameters:
Another effective way to pass additional information in a URL to a server is through query parameters. Query parameters are added to the end of a URL after a `?` and are formatted as `key=value` pairs. In Express, these parameters are conveniently accessible through the `req.query` object.

For example, consider the following URL `localhost:3000/hello?name=Christy&age=31`

This URL contains two query parameters:
* `name` with a value of "Christy"
*`age` with a value of "32"

These parameters follow the `?` symbol in the URL and are separated by `&`. 

When a request is made to this URL, the Express server can retrieve these values from the `req.query` object. The `name` and `age` keys in the `req.query` object correspond to the query parameters in the URL. The server can then use this data, for example, to personalize a response message. 

Here's how the server processes this request in Express: 
```javascript
app.get("/hello", (req, res) => {
    const name = req.query.name
    const age = req.query.age

    res.send(`Hello there, ${name}! I hear you are ${age} years old.`);
});
```
> If we were to `console.log` the `req.query` object, you'll see an object representation of the query parameters, which in this case would be {name: "Christy", age: "31",}. This object structure makes it simple to access and use the parameters within the servers logic.

## Express Middleware:
### Understanding Middleware in Express:
Middleware in Express is a powerful feature that acts as an intermediary between incoming HTTP requests and the routes that handle them. It's a function that has access to the request object(`req`), the response object ('res') and the next middleware function in the applications request-response cycle. Middleware can execute code, modify request and response object, end the request-response cycles or call the next middleware in the stack.

The primary role of middleware is to intercept the incoming requests and perform operations or run specific code before these requests are routed to their designated route handler functions. This allow developers to add functionalities such as logging, authentication, and request parsing to their Express applications. 
            
To practice implementing a middleware function, we'll be downloading an NPM package called Morgan and using its built in methods to add functionality to our app. 

### Installing and using Morgan for logging:
Morgan is a popular HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application, helping in debugging and monitoring. Put simply, when there is activity in your server (such as a browser making a request to a route) Morgan prints this activity to your terminal in real time! 

#### Step 1: Install Morgan
If your server is running, terminate that process with `Ctrl + c`

Now, add Morgan to your project: 

`npm i morgan`

#### Step 2: Incorporate Morgan into your Express App.
In your `server.js` file, require and use Morgan at the top of your file: 

```javascript
const express = require('express');
const morgan = require('morgan');

const app = express();

// Use Morgan middleware with the 'dev' option for concise output
app.use(morgan('dev'));

// Rest of your Express app code
```

The `app.use(morgan('dev'))` line tells Express to use Morgan as a middleware with the 'dev' format, which provides a concise colored output. Review the Morgan Docs for more options on customizations. 

#### Step 3: Test a Route:
Restart your server:

`nodemon` in the terminal

Test one of your existing routes in the browser to see Morgan in action: 

```javascript
app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>');
});
```
                
Visit `localhost:3000/` in your browser.

#### Step 4: Check out Morgans Logging:

In your ervers console, you'll see Morgon loggin information about this request, such as the HTTP method, path, response status, and response time. 

### Implementing Multiple Middleware Functions:
Now you've seen what a pre-made middleware package can offer, but what if you need more custom middleware functions in your application? 

In Express, middleware functions are incredibly versatile, allowing you to perform a variety of operations on incoming requests. This means you can add multiple middleware functions within a single application. This allows up to build a layered architecture, where each middleware function can perform its task independently and padd control to the next one in a sequence. 

#### How Multiple Middleware functions work:
- **Next Function** `next()`: Middleware functions have access to a `next` function. Calling `next()` within a middleware passes control to the next middleware function in the stack. 

##### Example of using multiple middleware functions:
In this example, the server runs two custom middleware functions before the request is passed to the route. 

```javascript
const express = require('express');
const app = express();

// First middleware function
app.use((req, res, next) => {
    console.log('Middleware 1: Logging request details');
    next(); // Pass control to the next middleware
});

// Second middleware function
app.use((req, res, next) => {
    console.log('Middleware 2: Performing some operation');
    next(); // Pass control to the next middleware
});

// Route handler as the final middleware
app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>');
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
```

#### Key Takeaways:
- Flexibility: You can insert as many middleware functions as needed, allowing flexibility in how you handle requests/
- Order Matters: The order in which middleware functions are declared is important, as it dictates the flow of request processing. 
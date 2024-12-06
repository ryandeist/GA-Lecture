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
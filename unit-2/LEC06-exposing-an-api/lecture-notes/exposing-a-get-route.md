# Exposing an API - Exposing a GET route
## Calculator API
We will create a simple calculator API containing the following routes. 

- GET => /calculator => returns the current total of the calculator.
- POST => /calculator => accepts a number and an operation to update the total. 
- DELETE => /calculator => resets the calculator total to 0.

## Exposing a GET route. 
Before building out our first route, we will need to store the `total` of the calculator. We will start with a total of 0.

Add total tp `server.js`
```
const express = require('express');
const app = express();

// to track our calculator total
let total = 0;

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
```

> We are using `let` instead of `const` here becuase out application will update the value of `total` each time we receive a request to alter the total (such as adding, subtracting, etc.)

### Building the route
Let's build the first route for our calculator API. This route's purpose is to return the current total of the calculator. 

First, we'll define the key components for our route:
* Endpoint: `/calculator`
* HTTP Method: `GET`, we are just retrieving data, not updating it. 
* Response: The response will be a `JSON` object representing the *current total*.

Now we are ready to build the route. In Express we will use the `app.get()` method.
```
let total = 0;

app.get('/calculator', (req, res) => {
// code will go here
});
```

Inside the callback function, we will set up the logic to send back the current total. We can use Express' `res.json()` method to send a `JSON` response. Here, we'll send back an object that includes the current value of total. 
```
let total = 0;

app.get('/calculator', (req, res) => {
    res.json({ total });
});
```

> In our response, we are utilizing shorthand syntax in JavaScript for object creation. This means when we write { total }, it is equivalent to { total: total }. The key total is automatically assigned to the value of the total variable. 

### Adding a status code
Including HTTP status code in your application is a smart next step and best practice as you are learning to develop APIs. These codes provide clear feedback on the result of each request. This approach not only enhances your applications clarity and user experience, but also reflects your understanding of good coding practices and industry norms. 

Adding status codes to your responses in express is easy with the `status()` method. This method comes built into the response (`res`) object. Simply chain `status()` with the response method you're using, such as `send()`, `render()`, or `json()`. This way you first set the HTTP status code and then you send you response.

`res.status(200).json({ total });`

> In the context of web servers and APIs, when a server returns a 200 OK response, it means that the request was received, understood, and processed as expected. 

## Testing in Postman
Since this a `GET` request, we could the browser and navigate to `http://localhost:3000/calculator` to test our route. However, for this lesson we will practice using Postmant.

First start the server (`nodemon`) and launch Postman. 
Create a new collection for our Calculator API. 
//import express
const express = require('express');
const morgan = require('morgan');

//create our express application object. Best practice is to save this as app.
const app = express();

// Use Morgan middleware with the 'dev' option for concise output
app.use(morgan('dev'));

// Multiple middleware functions

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

//our routes
app.get('/', (req, res)=> {
    res.send('<h1>Hello Express!</h1>'); //sends response back to client
});

app.get('/home', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
});

app.get('/somedata', (req, res) => {
    res.send('Somedata');
});

app.get("/hello", (req, res) => {
    const name = req.query.name
    const age = req.query.age

    res.send(`Hello there, ${name}! I hear you are ${age} years old.`);
});

app.get('/greet/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// MULTIPLE PARAMETERS
// Make a route that takes two parameters and concats into one word.

app.get('/concat/:param1/:param2', (req, res) => {
    const concatedParams = req.params.param1 + req.params.param2
    res.send(concatedParams);
})

app.get('/:itemNumber', (req, res) => {
    console.log(req.params); 
    console.log(req.params.itemNumber);

    res.send(`<h1> Item ${req.params.itemNumber}</h1>`);
});

//listen on port 3000 for requests. 
app.listen(3000, () => {
    console.log('Listening on port 3000')
});
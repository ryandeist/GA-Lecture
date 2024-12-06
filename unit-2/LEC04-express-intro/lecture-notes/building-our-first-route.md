# Intro to Express - Building our First Route:
## Introduction to Express Routing: "Hello World!":
In programming tradition, the first step in learning a new language or framework is writing "Hello, World!" program. Let's create our first Express route to displat "Hello, World!" in the browser using the Express app structure we've set up.

### Writing our first Route:
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
                
### Testing our Route
Check to make sure your server is still running. 

Visit localhost:3000, "Hello, World!" should be displayed. 

### Updating our Route
Let's modify our route to respond with "Hello Express!" instead. 

```javascript
app.get('/', (req, res)=> {
    res.send('<h1>Hello Express!</h1>'); 
    //sends response back to client
});
```
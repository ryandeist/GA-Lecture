# Intro to Express - Building an Express Server:

## Setting Up Express in your Project
Before we start coding, let's set up the Express Framework. 

### Installing Express:
To include Express in your project, run:
`npm i express`

### Writing the server code:
Now we add the `Express` package to the `server.js` file that will house our server code:
EX:

```javascript 
//import express
const express = require('express');

//create our express application object. Best practice is to save this as app.
const app = express();
```

Define routes and starting the server:

```javascript
//listen on port 3000 for requests. 
app.listen(3000, () => {
    console.log('Listening on port 3000')
});
```

The `listen` method starts the server on a specified port.

### Understanding Ports:
Think of ports as a locked door on a computer. When an application is running on a port, the door unlocks and we can enter, allowing allowing us to interact with the application running on that port. 

## Running your Express Server with nodemon for Development:
Running a JS file in the terminal with the node command executes the file in its current state. As you build and modify server files, you'll often want to test changes quickly. This typically require saving your file and rerunning the server code to apply these changes. Manually restarting the server for every update can become tedious, but thankfully this process can automated with a helpful NPM package called nodemon. 

nodemon is a valuable tool for a Node development. It monitors yourfiles for changes and automatically restarts the application, removing the repetitive taks of manual server restarts. 

### Installing nodemon:
Update and existing nodemon installation or install nodemon globally with this command in your terminal. 

```
npm i -g nodemon
```

### Running the server with nodemon:
Start your server using the `nodemon` command in your terminal

```
nodemon server.js
```

## Check the Terminal:
Once the server is running, you should see confirmation in your terminal, indicating that it's listening on port 3000. These colorful logs come from the nodemon package and provide helpful information about the status of your server as your code changes. 

## Stopping Your Server:
With the terminal selected, use `Ctrl + C` to end the nodemon process. This key combo sends a SIGINT (signal interupt) to the Node process running your Express server, causing it to terminate gracefully. 

## Simplifying server start-up with nodemon in package.json
If you set `server.js` as the main entry point in your `package.json`, you can start your app with just the `nodemon` command. 

1. Open your projects `package.json` file. 
2. Modify the `main` property:
    * Look for the `main` property, which specifies the entry point of your application.
    * Change it's value to `server.js` (or the name of your server app file).

### Running your server with nodemon:
With `server.js` set as the main file, you can now start your server with just the `nodemon` command in your terminal.

nodemon will automatically reference the `main` property in `package.json` and launch the specified server file. 
# Intro to Node - Executing JavaScript with Node

Node's runtime environment for JavaScript is different than that of the browser, primarily because:

- It doesn't have a browser's DOM or [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API).
- It has networking and file system APIs that the JavaScript browser does not. Browsers don't implement these features for security reasons.

I'll perform a simple experiment highlighting the differences between the browser's and Node's distinct environments. Follow along yourself, or just watch.

### In the web browser

1. Open the web browser and access the console in the DevTools.
2. Type and execute the following JavaScript command:

   ```js
   window;
   ```

   > 🧠 This command returns the `window` object, representing the browser's window, including methods and properties to manipulate the web page's content.

### In the terminal

The Node REPL (Read-Eval-Print Loop) is an interactive shell that lets you execute Node code line by line.

1. Open the terminal and start Node's REPL by typing:

   ```bash
   node
   ```

2. Once in the Node REPL, type and execute the following:

   ```js
   window;
   ```

   You'll receive a `ReferenceError`, indicating that the `window` object is `undefined` in Node. This demonstrates that browser-specific objects like `window` and Web APIs are not available in Node.

3. We can further illustrate this point by trying to access a DOM element, which is a common browser operation:

   ```js
   document.querySelector('body');
   ```

   Again, since the DOM is part of the web browser environment, executing this code with Node will result in an error.

### Testing Node features in the browser

Just like how the `window` object is not defined in Node, some objects or modules that come with Node are inaccessible in the browser.

1. Back in the **browser's console**, type and execute the following:

   ```js
   fs;
   ```

   We'll encounter a `ReferenceError` because the `fs` (File System) module is specific to Node and not defined in the browser.

2. Return to the **terminal** running the Node REPL and execute the following code:

   ```js
   fs;
   ```

   Unlike the browser, Node will return the `fs` module used for file system operations in Node.

3. Use `Ctrl` + `D` to exit the Node REPL.

This experiment highlights how Node and browsers have distinct global objects and capabilities. Node is capable of handling back-end functionalities like file system access. Browsers are equipped for front-end tasks like DOM manipulation.

> 🧠 For more information, refer to Node's documentation on the [`fs`](https://nodejs.org/api/fs.html) module.

## Running JavaScript files in the terminal

Let's test how Node enables us to run JavaScript programs in the terminal. Copy the following JavaScript code into your `server.js` file:

```js
const multiply = (a, b) => {
    return a * b;
};

const product = multiply(5, 8);

console.log(product);
```

Use `Ctrl` + `` ` `` (that is a backtick - this key is above the `Tab` key and to the left of the `1` key) to open the integrated terminal in VS Code. You can run your commands here just as you would your terminal app.

Back in the terminal, use the following command to use Node to execute what we just wrote in `server.js`:

```bash
node server.js
```
# Intro to Async Programming - Callbacks
## Understanding callbacks in asynchronous JavaScript
A callback is a function passed into another function as an argument so it may be invoked when it's needed. Many JavaScript functions are designed to use callbacks, including browser even handling and asynchronous requests like reading files. 

We'll test reading a file with Node's built in `fs` module to demonstrate. 

### Creat a test file
Create a file named `test.txt` in the project directory

```
touch test.txt
```

Add sample text to `test.txt`:

```
hey!
```

### Read the file 
Add the following code to `app.js`

```
const fs = require('node:fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
    console.log(data);
});
```

'fs' is Node's built-in file system module. It allows our app to interact with the file system.

The `readFile()` method will read from the file specified (`test.txt`) using the UTF-8 Character Set. The contents of that file will be available to the callback function's `data` parameter. When this code is run, you should see `hey!` (the files contents) printed to your console. 

To confirm this, run the code:
```
node app.js
```

At a deeper level, this code demonstrates asynchronous file reading, where `fs.readFile()` is a non-blocking, asynchronous operation.

This means that the rest of the program can continue to run while the file's contents are retrieved. 

### Add code at the end of `app.js`

```
const fs = require('node:fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
    console.log(data);
});

console.log('Run this as soon as possible');
```

### Observe the asynchronous behavior
Run the code using 
```
node app.js
```

Notice the output order. The "run this as soon as possible" message appears before the "hey!" file content. We can see the asynchronous behavior of this code. 

## What's happening under the hood?

* Reading file from a hard disk is a relatively ***lengthy process*** for a computer, ***even if it's a fraction of a second for us.***
* Reading the file asychronously frees the program up to move on to the next bit of code to be executed: `console.log('run this as soon as possible');`.
* Once the file read is complete, we'll log the file's contents with `console.log(data)`.
* Putting all of that together, when you run this code, you see the text "run this as soon as possible" first, followed by the contents of `test.txt`: "hey!". This demonstrates the non-blocking nature of asynchronous operations.
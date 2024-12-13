# Intro to Asynce Programming - Error handling with `try...catch`
## What is a `try...catch` statement?
The `try...catch` statement provides a way to handle errors that may occur in a block of code without stopping the execution of the entire script.

### `try`
* In the `try` block, you write the code that might *throw and error*. Think of it as communicating to the app, "Attempt this operation, expecting it might fail."
* If any code withing the `try` block throws an `error`, the execution immediately jumps to the `catch` block. The remainder of the code in the `try` block will not run. 
> *Throwing an error* is a deliberate action in code. It refers to the act of generating an error when something doesn't go as expected. Once an error has been thrown by code in a `try` blcok, it can be handled with a `catch`.

### `catch`
* The code inside the `catch` block is executed if and error is thrown within the `try` block. 
* It receives an `error` object that contains details about what went wrong, allowing you to handle the error, console log it, or provide alternative logic. 

## Anatomy of a `try...catch`
Let's take a closer look at the structure of a `try...catch` block.

![try...catch syntax](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-asynchronous-programming/error-handling-with-try-catch/assets/try-catch.png)

1. The `try` keyword. The code in the block that follows will run until either an error is thrown or there is no code left execute.
2. The code to run. We expect that this code might throw an error. 
3. The `catch` keyword. The code in the block that follows will only run if an error occurs in the `try` block. 
4. The `error`. Details about the error are held in this object. The properties of this object can vary. You can name this identifier something of your choice('error', 'err', or 'e' are all common).
5. The code to run if an error is thrown. This can be as little as just console logging the error. 

In this structure, the `try` block can contain any code that might throw an `error` during execution. When an `error` is thrown in the `try` block, it is caught and handled by the `catch` block, allowing an application to continue running.

Visit the [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) docs on MDN for more information on the syntax and use of try and catch. 

## Using `try...catch` in asynchronous functions
So what does `try...catch` have to do with asynchronous behavior?

Consider the types of operations we've discussed that typically use asychronous code, like reading from a disk, querying a database, or calling an API. These actions occur ***outside of the boundries of our application*** and rely on external resources to function. We can't guarantee the behavior or functionality of those external resources.

Therefore, asynchronous operations are more error-prone than other operations, so you should typically enclose them inside a `try` block. Take a look at an example of this below:

Let's see this in action by trying to read a file that doesn't exist

```
const readAnotherFile = async () => {
  try {
    // asynchronous operation reading a file that doesn't exist
    const data = await fs.readFile('test4.txt', 'utf8');
    console.log(data);
  } catch (error) {
    // console logging the error lets us see what went wrong
    console.log(error);
  }
}

readAnotherFile();
```
* The asynchronous operation `await fs.readFile('test4.txt, 'utf8');` is placed in the `try` block. If and error occurs during this operation, it will return an `error` with information about what went wrong.
* The `catch` block captures any thrown `error`. In this case, our `catch` block prints the `error` to the console, but far more robust error handling could also be included. 
* Using `try...catch` in asychronous functions can help maintain a positive experience for developers and end users by preventing crashes due to unhandled errors in asychronous code. 

Test the code:

```
node app.js
```

When you do, you'll see an error in your console: 

```
[Error: ENOENT: no such file or directory, open 'test4.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'test4.txt'
}
```
Our error was successfully caught and logged! 

> Reading errors can be overwhelming, but typically, you'll find the most straightforward explanations on the first line of an error in the console log, as we see above - `no such file or directory, open test4.txt`, informing us that there is not a test4.txt file.
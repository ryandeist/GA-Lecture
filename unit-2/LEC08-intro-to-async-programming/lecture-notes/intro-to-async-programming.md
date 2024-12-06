# Intro to Async Programming
## Concepts:
### What is asynchronous programming?
By default, JavaScript operates synchronously; code is quickly executed line by line in the order it was written. This also means that each line of code must complete its execution before the execution of the following line can begin. If a particular task is time-consuming, it can cause a delay in the execution of subsequent lines of code. 

[*Asynchronous programming*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) is a way to make your program perform tasks that might take a while without blocking other tasks.

Asynchronous programming allows a program to start a task that will be completed sometime in the future without blocking other tasks. This frees up the program to execute other tasks and eventually return to the original task once it's ready. 

![async diagram](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-asynchronous-programming/concepts/assets/sync-vs-async.png)
> In programming, asynchronous refers to operations or events that don't occur in sequential order.

### Why use asynchronous programming?
Asynchronous programming is useful for tasks that involve waiting. This usually involves scenarios where an application needs to wait for an external process, like fetching data from a database or reading a file. 

Unlike synchrosnous programming, where the entire application might freeze during such operations, asynchronous programming allows the rest of your application to remain active. This allows your program to update the UI or respond to user inputs while waiting for the data or file. 

Asynchronous programming significantly improves the overall user experience by preventing an application from becoming unresponsive during lengthy operations. Users are not left waiting for the application to respond, leading to a smoother and more interactive interface. 

You've likely encountered apps that utilize asynchronous programming befor, but might not have realized it. Apps like Facebook, X, blogs, news media and others will load only a small amount of content initially so the user can quickly view and interact with the application. As the user scrolls down the page, additional content is loading so that there is always more to look at below whatever the user is viewing. 

This feature is commonly referred to as *infinite scroll*, and it's just one of many examples of asynchronous programming. If these applications tried to load ***all*** the information available on the initial page, the user experience would suffer. Instead, the page loads with a small amount of data to get the user started and then adds more content asynchronously as they interact with the application. 

Many essential tools and operations in JavaScript are designed to work asynchronously - including operations like reading files or making database queries. Understanding how to work with asynchronous code will enable you to add these features to your apps. 

> Understanding asynchronous programming is crucial in JavaScript, especially for operations like server requests, file reading, or any other task that takes time to complete. 













# Intro to Async Programming - `then()` and `catch()`
### What are `then()` and `catch()`?
In JavaScript, `then()` and `catch()` are methods used to handle asynchronous operations. They provide a functionality similar to what you can achieve with `async/await` and `try...catch` blocks. In short, `then()` is used for handling the fulfillment of a promise, while `catch()` is used for handling an errors. 

### `then()`
The `then()` method chains to the end of an asychronous operation, like a `fetch` request. It accepts a callback function that is executed when the asynchronous operation completes. The callback function passed to the `then()` accepts the result of the promise as its input. 
```
// add a new endpoint
const commentsApiUrl = 'https://jsonplaceholder.typicode.com/comments/4';

fetch(commentsApiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
```
In the code block above, we are chaining two instances of the `then()` method together. 

Breaking it down:
* **First Callback**: The first instance of `then()` had a callback of `(response) => response.json()`. This function receives the response (`reponse`) from the `fetch` request. It then calls `response.json()` to convert the response body into a JavaScript object. This conversion is also an asynchronous operation, so `response.json()` returns another `Promise` object.
* **Second Callback**: The second instance of `then()` waits fir tge `Promise` returned by `response.json()` to be resolved. It then executes its callback `(data) => console.log(data)`, which receives the data and logs it to the console. 

Note how similar this looks to the equivalent code if we used `async/await` to accomplish the same task: 
```
const functionName = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
```
`async/await` is typically preferred in modern code, as `then()` syntax is prone to callback hell and the pyramid of doom. However, recognizing `then()/catch()` syntax can be helpful when reading documentation or working with older code. 

### `catch()`
The `catch()` method can be chained to the end of a `then()`. It accepts a callback function as an argument. This callback function executed if an error occurs at any point in the chain and receives the error as an argument. 
```
fetch(commentsApiUrl)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

Again, this is very similar to the functionality provided by `try...catch` blocks!
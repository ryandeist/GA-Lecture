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






## setTimeout()
### What is the `setTimeout()` method?
A great example of asynchronous code in JavaScript is the global [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) method. The `setTimeout()` method is designed to execute a callback function after a specified amount of time. The `setTimeout()` method is asynchronous; it breaks from the ordered execution of code and does not block the execution of later lines of code. 

#### Anatomy of `setTimeout()`
The `setTimeout()` method is constructed like this:
```
setTimeout(callback,delay);
```
![setTimout syntax](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-asynchronous-programming/settimeout/assets/set-timeout.png)
1. **`callback`** - This is the function that `setTimeout()` will execute after the specified delay. It can be either a named or anonymous function. 
2. **`delay`** - This specifies the amount of time to wait before executing the `callback`, measured in milliseconds. For example, a delay of 1000 milliseconds equates to 1 second.

### Understanding the asynchronous nature of `setTimeout()`
By default, JavaScript operates sychronously, meaning code is executed sequentially, line-by-line. Each line must complete its task before the following line begins execution. 

For instance, in the following sychronous code, each `console.log()` statement prints out in the order they are written:
```
console.log("First");
console.log("Second");
console.log("Third");

// Output ->
// First
// Second
// Third
```

However, introducing `setTimeout()` changes this behavior.

```
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

console.log("Third");

// Output ->
// First
// Third
// Second
```
When the `setTimeout()` function is called, it schedules the 'Second' message to print after a 1-second delay.

However, this delay doesn't stop the rest of the code from running. That is why `Third` is printed immediately after `First`, without waiting for the 1 second delay.

## Promises
### Understanding JavaScript Promises
[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) in JavaScript are a crucial mechanism that alloq us to write asynchronous code. A `Promise` represents the current state of an asynchronous operation.

####Promise states
![promise structure](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-asynchronous-programming/promises/assets/promise-states.png)
A promise can exist in one of three states:
1. **Pending**: The initial state of a promise when it's created. The asynchronous operation has not been completed yet, and the results are pending. 
2. **Fulfilled**: The asynchronous operation was successful
3. **Rejected**: The asynchronous operation failed or encountered an error.

Once a promise is either fulfilled or rejected, it is considered ***settled***, and its state can no longer change. 

### Handling Promises
In modern JavaScript, many built-in methods return promises, making it easier to work with asynchronous operations.

An example is Node's `fs/promises` module, which contains the `readFiles()` method we utilized throughout this lecture. 

Promises in JavaScript can be *consumed* in various ways including:
* Using `.then()` and `.catch()` for chaining asynchronous operations
* `async/await` for more modern, readable, and synchronous-style code.
* `Promise.all()` for executing multiple promises concurrently and handling their results together. 
> *Consuming a promise* in JavaScript refers to the process of handling the eventual result (either fulfillment or rejection) of a promise. 

### Creating a Promise from scratch
Promises are created using the `Promise` constructor, which takes a function as its argument. This function generally performs an asychronous operation and calls either `resolve` (on a successful completion) or `reject`(on failure).
```
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* operation successful */) {
    resolve('Success!');
  } else {
    reject('Failure.');
  }
});
```

## Intro to the Fetch API
### What is the Fetch API?
We have two methods of generating HTTP requests in HTML: navigating using links and submitting forms. 

JavaScript allows us to make HTTP requests from our application without relying on these two mechanisms. Using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), any action in JavaScript can make HTTP requests. 

The Fetch API facilitates communication between a client and a server, allowing the application (acting as a client) to generate requests and process responses. The primary function provided by the API is the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) method. 

### Anatomy of the `fetch()` method
The `fetch()` method takes two parameters: 
![fetch anatomy](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-asynchronous-programming/intro-to-the-fetch-api/assets/fetch-method.png)
1. A URL to the resource you want(this will be a `resource` or URL)
2. An optional options object. The MDN docs have documentation on all valid properties, but the most common ones are below. 

Lets take a look at how a basic fetch request is typically constructed: 
![fetch request diagram](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-asynchronous-programming/intro-to-the-fetch-api/assets/fetch-request.png)
1. We define an asynchronous function called `functionName` that will accept a URL as an assignment. Like any other function, the name select does not impact how it behaves, but the name should describe what action the function carries out for readability. 
2. We use `fetch()` to make a `GET` request to the specified URL inside the function. Since `fetch` is asynchronous, we must use `await` to pause the execution of this function until we receive a response. This is necessary because we can process data we don't have yet.
3. Next, the response is converted into a JavaScript object using the *`json()` method*. This step is also asynchronous, so we again use the `await` operator. 
4. Finall, the fetched data is logged to the console. 
> The `json()` method converts the *JSON* text in the `body` of a response object to a JavaScript object. It's typically applied to the response object returned by the `fetch()` to handle *JSON* data sent from a server.

>*JSON*, short for JavaScript Object Notation, is a common format for storing and transporting data across the internet. It's structure closely resembles a JavaScript object. 

### The `options` object
The [`options` object](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#options) allowss you to apply various settings to a request made with the fetch method. Some of the most common properties for the options object include: 

#### [`method`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#method)
The `method` property is used to specify the request's HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc). If no HTTP method is provided, the default `GET` method is used.

#### [`headers`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#method)
The `headers` property is used to set HTTP headers for the request. HTTP headers include additional information about the request, such as the type of data being submitted. 

#### [`body`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#method)
The `body` property includes any data, such as information entered in to a form. Here's an example that utilizes the `method`, `headers`, and `body` property. 

```
fetch(url, { 
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ greeting: 'Hello World!' })
});
```
> In the example about, the [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method converts the JavaScript object into a `JSON` string. Whenever we put `JSON` into the request's `body`, we must also set the `headers` property as demonstrated above: `headers: { 'Content-Type': 'application/JSON' }`.

### Making a fetch request
Let's make a fetch request using an API called [`JSONPlaceholder`](https://jsonplaceholder.typicode.com/), which is used for testing and prototyping. 

They provide six resources we can get data for - we'll use the `users` resource, which will give us and array of 10 random placeholder user objects. 

First, lets define the API *endpoint* we will be using:
```
const usersApiUrl = 'https://jsonplaceholder.typicode.com/users/';
```
> In the context of an API call, an *endpoint* refers to a specific URL where you can access or interact with a resource. In this case, we're accessing data at this endpoint. 

In the next step, we'll create a function to make a `GET` request to this endpoint to access the `users` resource.

### Defining a fetch function
Add the following code to `app.js`:
```
const getAllUsers = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getAllUsers(usersApiUrl);
```

Let's break down this code:

In this example, we are defining an `async` function called `getAllUsers`. The function accepts a URL as an argument.

First, note our `try...catch` block. We're telling our app to attempt the fetch request, and if anything goes wrong along the way, catch the error and `console.log()` it. 

Inside the `try` block, `fetch()` is called, and the `url` parameter is passed into it. We wait for a response and then turn the JSON on the response's `body` into usable data. We then console log this `data`.

When we run our code, our console should display something like the array below:

```
[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  // more data
]
```

## Handling Errors `catch` won't catch
### `catch` doesn't catch all errors
Using `try...catch` with API calls has certain limitations. When making fetch requests in JavaScript, it is helpful to check the `response.ok` property in assion to using a `try...catch` block.
> The `response.ok` property returns `true` if the response status is within the range 200-299. This range of numbers indicates that a request was successful.

Checking for `response.ok` is useful because:
* **Response Status**: The `fetch` API does not throw errors in response to HTTP statuses. As a result, our `try...catch` will not automatically detect issues with the `response` object.
* **Precise Error Handling**: By checking `response.ok`, you can handle HTTP error statuses explicitly. This allows you to throw a custom error and provide a more detailed error message.

### Error handling in fetch requests
Let's get some practice with error handling in fetch requests. Update your code as shown in the example below:
```
// Note our endpoint is changing to an invalid endpoint to demonstrate a 404 error!
const usersApiUrl = 'https://jsonplaceholder.typicode.com/fake-endpoint/';

const getAllUsers = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Status: ${response.status}`);
    };

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getAllUsers(usersApiUrl);
```
In the example above, we are now using an `if` condition to check the `ok` property of out `response`. If there is an issue with the `response`, the `ok` property will have a value of `false`, and our code will `throw` a new `Error` object for the `catch` block to handle (in this case, with a console log).

Now, when we run our code, we should see the following in our console:
```
Error: HTTP Status: 404
```

### Custom error messages
Notice how we pass a custom error message to the *`Error`* constructor above the code. The message includes the `status` of our `response`. The *`throw`* operator causes our code to exit the `try` block and move to the `catch` block. In this scenario, we are forcing a `404` (meaning the resource could not be located) error by passing a nonexistent URL to the `getAllUsers` function. This will allow us to test our error handling. 
> The `Error` constructor creates an error object for debugging purposed. The `throw` operator is used to trigger that error. 

## `then()` and `catch()`
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
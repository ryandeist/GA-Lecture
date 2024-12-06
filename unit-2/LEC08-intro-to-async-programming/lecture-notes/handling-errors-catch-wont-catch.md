# Intro to Async Programming -  Handling Errors `catch` won't catch
## `catch` doesn't catch all errors
Using `try...catch` with API calls has certain limitations. When making fetch requests in JavaScript, it is helpful to check the `response.ok` property in assion to using a `try...catch` block.
> The `response.ok` property returns `true` if the response status is within the range 200-299. This range of numbers indicates that a request was successful.

Checking for `response.ok` is useful because:
* **Response Status**: The `fetch` API does not throw errors in response to HTTP statuses. As a result, our `try...catch` will not automatically detect issues with the `response` object.
* **Precise Error Handling**: By checking `response.ok`, you can handle HTTP error statuses explicitly. This allows you to throw a custom error and provide a more detailed error message.

## Error handling in fetch requests
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

## Custom error messages
Notice how we pass a custom error message to the *`Error`* constructor above the code. The message includes the `status` of our `response`. The *`throw`* operator causes our code to exit the `try` block and move to the `catch` block. In this scenario, we are forcing a `404` (meaning the resource could not be located) error by passing a nonexistent URL to the `getAllUsers` function. This will allow us to test our error handling. 
> The `Error` constructor creates an error object for debugging purposed. The `throw` operator is used to trigger that error. 
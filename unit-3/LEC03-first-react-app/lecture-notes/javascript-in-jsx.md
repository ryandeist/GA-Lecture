# First React App - JavaScript in JSX

## JavaScript in JSX
Let's explore how to integrate JavaScript into JSX using curly braces. This capability allows us to insert JavaScript values and expressions into our JSX dynamically. 

To explore using JSX curly braces, let's create some new data. For now, let's make a single object called `todo`:

```jsx
// src/App.jsx

const App = () => {
  // add the following:
  const todo = { text: 'A brand new task', done: true };

  return (
    <>
      <h1>Hello world!</h1>
      <h2>Hello universe!</h2>
      <hr />
    </>
  );
};
```

Curly braces allow us to add JavaScript to our JSX. We can write any JavaScript expression inside the curly braces, and the result of the expression will be inserted into the DOM. This means we can use dot notation to access a property on our `todo` object: 

```jsx
// src/App.jsx

const App = () => {
  const todo = { text: 'A brand new task', done: true };

  // replace the existing return with the following:
  return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>
    </>
  );
};
```

Inside the curly braces, we can reference the `todo` object and inject the value held on its `text` property directly into our HTML-like syntax. 

### Expressions vs Statements in JavaScript
Remember, we can only write JavaScript expressions inside of the curly braces. JavaScript expressions evaluate to a single value. The can be: 

* Assigned to a variable
* Provided as an argument to a function
* Returned from a function
* passed to a `console.log()`

Here are some examples: 
* `2 + 2`
* `"Hello"`
* `age > 21`
* `myFunc()`

Statement perform actions, and applications consist primarily of statements. 

We'll explore this idea more as we continue using JSX. 
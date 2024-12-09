# First React App - Conditional Rendering

## Conditional Rendering
JavaScript provides many tools for handling conditional logic, but not all of them work in JSX. For example, let's say we wanted to add a "Task Completed" Prefix to our `<p>` tag id `todo.done` is `true`. We might thinkg we can use an `if...else` statement like this: 

```jsx
// src/App.jsx

const App = () => {
  const todo = { text: 'A brand new task', done: true };

  return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>

      <h2>Conditional Rendering</h2>
      <p>{if(todo.done) {
        'Task Completed' - todo.text
      } else {
        todo.text
      }}</p>
    </>
  );
};

export default App;
```

However, this code will not complie because JSX does not support JavaScript statements like `if...else` directly within its braces. JSX is designed to describe the UI structure and only accepts expressions that evaluate to a value. 

So, we need a way to conditionally carry our actions without using statements. This narrows our choices, but it has the benefit of forcing us to write more concise and readable code. To incorporate conditional logic with JSX, we can use a ternary expression, which is an inline conditional expression that evaluates to a single value. This is ideal for JSX, as it fits the requirement of being an expression.

Check out how a ternary expression helps us accomplish our initial goal within this code:

```jsx
// src/App.jsx

const App = () => {
  const todo = { text: 'A brand new task', done: true };

  return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>

      <h2>Conditional Rendering</h2>
      <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text }</p>
    </>
  );
};

export default App;
```

Ternary expressions evaluate to a single value regarless of their outcome!

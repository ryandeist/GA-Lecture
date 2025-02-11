# Styling in React - Imported CSS Files

## Implementing external stylesheets
Let’s see how to implement imported CSS stylesheets in a React app.

To begin, import `Button1` into `src/App.jsx`:

```jsx
// src/App.jsx

import './App.css';
import Button1 from './components/example-1-normal-css/Button';

function App() {
  return (
    <div className="App">
      <Button1 buttonText="Example 1" />
    </div>
  );
}
```

Next, create a style sheet inside the `example-1-normal-css` directory:

```bash
touch src/components/example-1-normal-css/Button.css
```

After creating the file, we can import it into `src/components/example-1-normal-css/Button.jsx` like so:

```jsx
// src/components/example-1-normal-css/Button.jsx

import './Button.css';
```

Next, we’ll add a `btn` class to our `<button>` tag using the JSX attribute `className`:

```jsx
// src/components/example-1-normal-css/Button.jsx

import './Button.css';

const Button = ({ buttonText }) => {
  return <button className="btn">{buttonText}</button>;
};

export default Button;
```

All that remains is to add some styling to `src/components/example-1-normal-css/Button.css`:

```css
/* src/components/example-1-normal-css/Button.css */

.btn {
  background-color: #2465f1;
  border-radius: 8px;
  color: white;
  font-size: 24pt;
  padding: 15px 50px;
  width: 300px;
}
```

Check your work in the browser - it looks great!

## Benefits and pitfalls
Using external CSS files to style React components is straightforward and familiar. However, it’s important to remember that the styles defined in these files are global. This means they might conflict if you use the same `class` or `id` names in different files.
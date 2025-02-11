# Styling in React - Inline CSS in JSX

## Inline styling
Contrary to what we’ve been told about avoiding the `style` attribute in HTML, with React, inline styling is a common technique for **dynamic** styling.

Inline styling in React uses a `style` property; however, unlike the `style` attribute in HTML, we assign a JS object instead of a string.

## Applying inline styling
In `src/components/example-2-inline-css/Button.jsx`, create a `buttonStyle` variable and set it equal to an object.

Add your default button styles as key-value pairs to this object:

```jsx
// src/components/example-2-inline-css/Button.jsx

const buttonStyle = {
  backgroundColor: '#b974b6',
  borderRadius: '8px',
  color: 'white',
  fontSize: '24pt',
  padding: '15px 50px',
  width: '300px',
};
```
> 💡 Unlike normal CSS, property key names will need to be **camelCased** and their **values wrapped in a string**. Don’t forget your commas!

Set the `style` attribute in your component JSX equal to your `buttonStyle` object:

```jsx
// src/components/example-2-inline-css/Button.jsx
return <button style={buttonStyle}>{text}</button>;
```

Nice button!

## Benefits and pitfalls
Inline styling in React is particularly useful for dynamic styling. Since styles are applied as JavaScript objects, you can easily modify styles based on the component’s state or props. This allows for more flexible and interactive styling that changes in response to user actions or other conditions within the application.

As the application grows, managing styles inline can become cumbersome and less maintainable. This approach can lead to code duplication and difficulty in tracking style-related bugs.
# Styling in React - styled-components

## styled-components
styled-components combine JavaScript’s [tagged template literals](https://wesbos.com/tagged-template-literals) with CSS, allowing you to write actual CSS for styling your components directly within your JavaScript files.

This method simplifies the process by directly associating styles with components, eliminating the need for separate CSS files or class names.

We will need to install the package [styled-components](https://www.npmjs.com/package/styled-components) from npm before we can use it. We should probably also familiarize ourselves with thestyled-components docs.

```bash
npm i styled-components
```

Next, we’ll import the package at the top of the component as `styled`:

```jsx
// src/components/example-3-styled-components/Button.jsx

import styled from 'styled-components';
```

Define a styled component using the `styled` function. For example, to create a styled button, declare a `StyledButton` variable and use backticks ` to write your CSS:

```jsx
// src/components/example-3-styled-components/Button.jsx

const Button = ({ text }) => {

  const StyledButton = styled.button`
    background-color: #86ba8a;
    border-radius: 8px;
    color: #3d3d3d;
    padding: 15px 50px;
    font-size: 24pt;
    width: 300px;
  `;
```

The `StyledButton` variable is a React component with your specified styles applied when we use this approach. You can use this component in your JSX like any other React component.

Lastly, we will take that variable and render it as a component:

```jsx
  return (
    <StyledButton>{ text }</StyledButton>
  );
```

The fully styled component looks like this:

```jsx
// src/components/example-3-styled-components/Button.jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #86ba8a;
  border-radius: 8px;
  color: #3d3d3d;
  padding: 15px 50px;
  font-size: 24pt;
  width: 300px;
`;

const Button({ buttonText }) => {
  return <StyledButton>{buttonText}</StyledButton>;
};

export default Button;
```

You got it!

## Benefits and pitfalls
Using styled-components, styles are tightly coupled with components, leading to more modular and reusable code. This method promotes the creation of self-contained components where both logic and style are defined together, enhancing code clarity and ease of maintenance. As far as libraries go, this one is among the most popular.

For developers new to this approach, there can be a learning curve in understanding how to use JavaScript for styling. This method also increases the complexity of your code, as it blends CSS with JavaScript, which is not preferable for those who like to keep styling separate from scripting.
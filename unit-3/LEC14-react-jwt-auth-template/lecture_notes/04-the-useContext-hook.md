# React JWT Auth Template - the `useContext()` Hook

## Context
In React, context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data with a group of React components, such as the current authenticated user or the application's theme.

This process starts by creating context with the [`createContext()`](https://react.dev/reference/react/createContext) API. The context we create will hold the `user` state, which will be accessible to any component that needs it. 

This means that instead of storing and managing the `user` state in the `App` component and passing it down every component in our app, we can use the [`useContext`](https://react.dev/reference/react/useContext) hook to access the `user` state anywhere in the app. 

## Creating the user context for our app
We'll build a component that will manage the user state and provide it to the rest of the application. 

We'll created our user context in an entirely new directory called `contexts`:

```
mkdir src/contexts
touch src/contexts/UserContext.jsx
```

The `UserContext.jsx` file will export a component called `UserProvider` that will manage the `user` state and provide that state to any component inside of it. We won't set up state yet, just write the basic structure for the component:

```jsx
// src/contexts/UserContext.jsx

import { createContext } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

```

`UserContext` is created using the `createContext()` API. We'll use this context to provide the `user` state to the rest of the application. It also holds a `Provider` component. 

The `UserContext.Provider` component will be responsible for keeping track of the context data given to components that consume the `UserContext`. Currently, the `Provider` component is empty, but we'll add data soon. 

Note that we are destructuring the `children` prop in the `UserProvider` component. This is a special prop that React provides to components that have children. It allows the component to display whatever we pass between the opening and closing tags. 

Think of it as a placeholder for the content that React will render inside of the component. In this case, the `children` prop will be the components that need access to the `user` state we eventually add to this component. 

### 
# React JWT Auth Template - Conditionally Render in a Route

## Building a landing page and a dashboard
Let's implement a new piece of functionality in our application: a landing page for visitors and a dashboard that we'll show to authenticated users. We'll build these as two different components and then conditionally render one when the user navigates to the `/` route depending on whether the user is authenticated.

### Creating our components
Let's start with the less complex component = the `Landing` component. This component will be displayed to users who are not authenticated. Start by creating a new directory for this component along with a new file: 

```
mkdir src/components/Landing
touch src/components/Landing/Landing.jsx
```

Let's add some content to our `Landing` component: 

```jsx
// src/components/Landing.jsx

const Landing = () => {
  return (
    <main>
      <h1>Hello, you are on the landing page for visitors.</h1>
      <p>Sign up now, or sign in to see your super secret dashboard!</p>
    </main>
  );
};

export default Landing;
```

Next, create the `Dashboard` component: 

```
mkdir src/components/Dashboard
touch src/components/Dashboard/Dashboard.jsx
```

This component will eventually show a list of all the users that have created accounts in our application. For now though, let's display a message that welcomes the user by their username. This means we'll need to import the `UserContext` and use the `useContext()` hook to access the `user` context.

```jsx
// src/components/Dashboard/Dashboard.jsx

import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
    </main>
  );
};

export default Dashboard;
```

## Add a new route
Finally, let's modify our `App` component. Start by importing these new components, along with the `UserContext` and `useContext()` hook to access the `user` context. 

```jsx
// src/App.jsx

// Import useContext
import { useContext } from 'react';
import { Routes, Route } from 'react-router';

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
// Import the Landing and Dashboard components
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';

// Import the UserContext
import { UserContext } from './contexts/UserContext';

const App = () => {
  // Get the user
  const { user } = useContext(UserContext);

  // Return statement code here
};
```
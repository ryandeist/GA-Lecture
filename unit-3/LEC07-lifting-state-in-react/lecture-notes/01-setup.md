# Lifting State in React - Setup

## Setup
Open your Terminal application and navigate to your ~/code/ga/lectures directory:

```
cd ~/code/ga/lectures
```

Create a new Vite project for you React App: 

```
npm create vite@latest
```

You’ll be prompted to choose a project name. Let’s name it `lifting-state-in-react`.

* Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.
* Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```
cd lifting-state-in-react
npm i
```

Create a new directory to hold future components:

```
mkdir src/components
```

Then, open the project’s folder in your code editor:

```
code .
```

### Configuring ESLint
Before we begin, we need to adjust the ESLint configuration. Add the following rules to the `.eslintrc.cjs` file:

```
rules: {
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
  'react/prop-types': 'off', // add this line
  'react/no-unescaped-entities': 'off' // add this line
},
```

The first addition prevents warnings if you’re not declaring types for your props (which we’re not), and the second prevents warnings if you’re using contractions within JSX.

### Clear `App.jsx`

Open the `App.jsx` file in the `src` directory and replace the contents of it with the following:

```jsx
// src/App.jsx

const App = () => {

  return (
    <h1>Hello world!</h1>
  );
};

export default App;
```



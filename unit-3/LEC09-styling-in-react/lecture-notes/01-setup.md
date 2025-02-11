# Styling in React - Setup

## Setup
Open your Terminal application and navigate to your `~/code/ga/lectures` directory:

```bash
cd ~/code/ga/lectures
```

Create a new Vite project for your React app:

```bash
npm create vite@latest
```

You’ll be prompted to choose a project name. Let’s name it `styling-in-react`.

- Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.
- Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```bash
cd styling-in-react
npm i
```

Open the project’s folder in your code editor:

```bash
code .
```

### Configuring ESLint
Before we begin, we need to adjust the ESLint configuration. Add the indicated rules to the `rules` object in your `eslint.config.js` file:

```js
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', // add this line
      'react/no-unescaped-entities': 'off', // add this line
    },
```

The first addition prevents warnings if you don’t declare types for your props (which we’re not), and the second prevents warnings if you use contractions within JSX.

### Running the development server
To start the development server and view our app in the browser, we’ll use the following command:

```bash
npm run dev
```

You should see that `Vite` is available on port number 5173:

```
localhost:5173
```

### GitHub setup
To add this project to GitHub, initialize a Git repository:

```bash
git init
git add .
git commit -m "init commit"
```

Make a new repository on GitHub named styling-in-react.

Link your local project to your remote GitHub repo:

```bash
git remote add origin https://github.com/<github-username>/styling-in-react.git
git push origin main
```
> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the `<` and `>`) in the URL above.

## Directory setup
Add a directory called `components` inside `src`

```bash
mkdir src/components
```

Next, we’ll want to add the following directories inside the `components` directory:

- example-1-normal-css
- example-2-inline-css
- example-3-styled-components
- example-4-css-modules
- example-5-sass

To do so, you can run the following commands:

```bash
mkdir src/components/example-1-normal-css src/components/example-2-inline-css
mkdir src/components/example-3-styled-components src/components/example-4-css-modules
mkdir src/components/example-5-sass
```

## Creating the button components
We will recreate the same component file inside each of these example component folders. This will act as our “starter code” for each example.

**Note:** Typically, the purpose of components is reusability, however, because they all have different methods of incorporating their styles and CSS - we will be recreating the same component UI for each example.

Use the following command to create a `Button.jsx` file in each of the example folders (5 total):

```bash
touch src/components/example-1-normal-css/Button.jsx src/components/example-2-inline-css/Button.jsx
touch src/components/example-3-styled-components/Button.jsx src/components/example-4-css-modules/Button.jsx
touch src/components/example-5-sass/Button.jsx
```

Include the following code in each of the Button files:

```jsx
const Button = ({ buttonText }) => {
  return <button>{buttonText}</button>;
};

export default Button;
```

## Clear `App.jsx`
Now we’ll modify `src/App.jsx` and get it ready for our examples:

```jsx
// src/App.jsx

import './App.css';
// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
      {
        // Add all example components:
        <Button1 buttonText="Example 1" />
        //...
      }
    </div>
  );
};

export default App;
```

## Clear `App.css`
Let’s add some of our own default styles to `src/App.css`:

```css
/* src/App.css */

:root {
  background-color: #242424;
}

.App {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 100px auto;
  width: 300px;
}
```

Let’s get a cool Roboto font from Google Fonts.

Import your fonts at the top of `App.css` and add your font family styles to `'*'` (the universal selector).

```css
/* src/App.css */

@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

* {
  /* add custom fonts here */
  font-family: 'Roboto Flex', sans-serif;
}
```

## Delete `index.css`
Remove the `index.css` file from the project. We won’t need these default styles.

### Let’s get styling!
For each example, we’ll use the same base styling (with minor variations) in our button components.

You’ll want to refer back to these:

```css
.default-button {
  background-color: white;
  border-radius: 8px;
  color: blue;
  font-size: 24pt;
  padding: 15px 50px;
  width: 300px;
}
```
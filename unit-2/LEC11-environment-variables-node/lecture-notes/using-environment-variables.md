# Environment Variables, Node - Using Environment Variables
## Introduction to dotenv
Start here if you want to implement environment variables in an existing Node app!

[dotenv](https://www.npmjs.com/package/dotenv) is a popular Node module that loads environment variable from a `.env` file.

### Installing dotenv
First, we need to add `dotenv` to our project:
```
npm i dotenv
```

### Importing dotenv
Next, to use it, we'll need to import the module. Add this line ***at the very top*** of `server.js`:
```
require('dotenv').config();
```

### Creating a `.env` file
Finally, create a `.env` file in your projects ***root directory.***
```
touch .env
```

The `dotenv` package attempts to use `.env` files in the root directory by default.

Inside the `.env`, define your variables as KEY=value pairs. By convention, environment key cariable are written in all caps, the underscores separating multiple words. This helps to differentiate them from other variables. 

> The below environment variable is just for demo purposes. Other applications will have different environment variables specific to the app's functionality.

Enter the following in your `.env` file:
```
SECRET_PASSWORD=1234
```
> `.env` files are ***not JavaScript files.*** They are a set of KEY=value pairs where every value is treated as a string. Do not use quotes around the values. Do not use `let` or `const` when defining the keys. You will never add any spaces to these files.

### Accessing environment variables
The `dotenv` package attaches all the properties that match the keys in our `.env` file to the `process.env` object. For example, the `SECRET_PASSWORD` environment variable we defined above will accessible at `process.env.SECRET_PASSWORD`.

Let's access it in our code:
```
require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running!');
});

// adjust the following:
app.listen(port, () => {
  console.log('Listening on port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});
```

### Run the server
Run `nodemon`, and check the terminal. It should read:
```
Listening on port 3000
Your secret is 1234
```

## Protecting Secrets with `.gitignore`
At this stage, our secrets would still be visible if we pushed our code to GitHub. They've just been moved to a different file. This is where `.gitignore` comes into play.

A [`.gitignore`](https://git-scm.com/docs/gitignore) file specifies intentionally untracked files to ignore. When we include the string `.env` in a `.gitignore` file, we tell Git to ignore this file whenever we add, commit, and push code to GitHub.
```
touch .gitignore
```

In `.gitignore`, add the following:
```
.env
```

Now `add`, `commit` and `push` your code to GitHub. Once you're done, check the repo. You should see the server file but not the `.env`.

Anyone cloning the code must create their own `.env` file with a `SECRET_PASSWORD` value. This approach ensures that sensitive information remains secure and our loval secrets are safe. 

This also highlights the uniqueness of different environments, as we discuss earlier. No matter where our code runs, there should be a `SECRET_PASSWORD` environment variable, the value of that environment variable may depend on the environment congifuration. 

## Deployment Considerations
When deploying the Node app, remember to set the same environment variable in your deplayment environment. The values might differ from your local development environment.
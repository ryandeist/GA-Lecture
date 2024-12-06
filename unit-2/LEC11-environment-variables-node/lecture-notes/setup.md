## Setup

> 🧠 If you just want to implement environment variables in an existing Node app, you don't need to do any of these setup steps.

Create a new repository on GitHub named `environment-variables`.

Open your Terminal application and navigate to your `~/code/ga/lectures` directory:

```bash
cd ~/code/ga/lectures
```

Using the URL from GitHub, clone the repository:

```bash
git clone https://github.com/<github-username>/environment-variables.git
```

Do not copy the above command. It will not work. Your username will replace `<github-username>` (including the `<` and `>`) in the URL above.

Navigate into the new directory and open it in VS Code:

```bash
cd environment-variables
code .
```

Next, create a `server.js` file. This file will hold your work for this lecture:

```bash
touch server.js
```

In the terminal, create a `package.json` with all of the default settings by running the following command:

```bash
npm init -y
```

Next, we're going to add `Express` to our project:

```bash
npm i express
```

In `server.js`, add the following starter code:

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
```

Finally, use `nodemon` to execute the `server.js` file by using this command in your terminal:

```bash
nodemon
```

Visit [localhost:3000](http://localhost:3000/) to make sure you did everything correctly. If you did, you'll see the text `The server is running` in your browser.
## Setup

Open your Terminal application and navigate to your `~/code/ga/lectures` directory:

```bash
cd ~/code/ga/lectures
```

Make a new directory called `ejs`, then enter this directory:

```bash
mkdir ejs
cd ejs
```

Then, create a `server.js` file. This file will hold your work for this lecture:

```bash
touch server.js
```

Create a `package.json` with all of the default settings by running the following command:

```bash
npm init -y
```

Now that we have a `package.json` file, we can add a package from npm to our project. Add `Express` to our project with:

```bash
npm i express
```

Open the contents of the directory in VS Code:

```bash
code .
```

In `server.js`, add the following starter code:

```javascript
// server.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('The server is running!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
```

Use `nodemon` to execute the `server.js` file by using this command in your terminal:

```bash
nodemon
```

Visit <http://localhost:3000> to verify your setup was successful!
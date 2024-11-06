## Setup

Open your Terminal application and navigate to your `~/code/ga/lectures` directory:
```bash
cd ~/code/ga/lectures
```

Make a new directory called `exposing-an-api`, then enter this directory:

```bash
mkdir exposing-an-api
cd exposing-an-api
```

Create a server.js file. This file will hold your work for this lecture:

```bash
touch server.js
```

In the terminal, create a `package.json` with all of the default settings and install Express.js by running the following commands:

```bash
npm init -y
npm i express
```

Open the contents of the directory in VS Code:

```bash
code .
```

Add boilerplate code to the `server.js` file:

```js
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

Finally, run the server with `nodemon`:

```bash
nodemon
```
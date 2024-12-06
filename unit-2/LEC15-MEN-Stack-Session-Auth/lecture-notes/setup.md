## Setup

Open your Terminal application and navigate to your `~/code/ga/lectures` directory:

```bash
cd `~/code/ga/lectures`
```

Make a new repository on [GitHub](https://github.com/) named `men-stack-session-auth`.

Clone a copy of your remote repo locally by using the `git clone` command:

```bash
git clone https://github.com/<github-username>/men-stack-session-auth.git
```

> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the < and >) in the URL above.

Next, `cd` into your new cloned directory, `men-stack-session-auth`:

```bash
cd men-stack-session-auth
```

In this directory create a `server.js` file:

```bash
touch server.js
```

Create a node project along with its `package.json` file by using this command:

```bash
npm init
```

During initialization, you will be prompted to customize your project and the `package.json` file.

Accept the defaults (by just hitting `Return`/`Enter` for each prompt without adding any values).

Open the project's folder in VS Code:

```bash
code .
```
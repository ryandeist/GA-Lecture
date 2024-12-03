# Intro to Node - Installing Node Packages

## Working with packages in a project

Now that your project has a `package.json` file, you can add packages from the npm registry!

### Installing a package

We'll use a popular and practical package called [validator](https://www.npmjs.com/package/validator) for our example. Let's follow that link and check out some of the documentation for the package. It offers a variety of string validation and sanitization methods, such as:

- `isDate()`
- `isEmail()`
- `toBoolean()`
- `normalizeEmail()`

These kinds of methods might be helpful to us if we were collecting information from a user and needed to verify that it matches a specific format. While we could write this code ourselves, using a package someone else has already written saves us time!

To add a package from npm to your project, use the command:

```bash
npm i <package-name>
```

Replacing `<package-name>` (including the `<` and `>`) with the name of the package. As an example, to install the validator package we've been discussing, run the following command now:

```bash
npm i validator
```

> *Note*: The `i` in `npm i` is a shorthand for `install`.

### The installation process

- **Package download**: When you run `npm i validator`, npm downloads the validator package code from the npm registry to your local machine.
- **Where does this code live?**: The downloaded package code is stored in the `node_modules` directory that just appeared in your project directory. This is where all your installed packages are stored.
- **Using the package**: To use validator in your code, you need to make it accessible within your JavaScript files, with a `require()` statement.

### Exploring `package.json` post-installation

After installing a package, the dependencies object in `package.json` is updated to reflect this change:

```json
{
  "name": "intro-to-node",
  "version": "1.0.0",
  ...
  "dependencies": {
    "validator": "^13.11.0"
  }
}
```

- **Dependencies**: The `dependencies` property now includes `validator`, with `^13.11.0` indicating the installed version.
- **Version management**: The version number helps npm manage compatibility and updates. The caret `^` symbol allows minor updates that shouldn't break compatibility.

## Reinstalling node modules

There might be situations where you need to delete and reinstall all your project's dependencies. npm makes it easy by keeping an inventory of your packages in the `package.json` file.

Reinstalling is as easy as running `npm install` (or `npm i` for short).

By running `npm i`, all dependencies listed in `package.json` are automatically downloaded.

Let's try it!

## Practice

1. First, delete the `node_modules` directory. ***Don't worry.*** You can safely delete this entire directory without losing your project's dependency information.

2. Reinstall it by running the command:

   ```bash
   npm i
   ```

   Observe how npm automatically recreates the `node_modules` directory with all the necessary packages based on the `package.json`.

## Keeping `node_modules` out of Git repositories

As you install more dependencies, the `node_modules` directory can become large. Keeping it out of Git repositories saves space and makes cloning the repository faster.

- The `package.json` file in your Node project acts like an inventory list. It tracks all the packages your project depends on, including their specific versions.
- Because `package.json` contains all this essential information, there's no need to upload the actual Node modules to your Git repository. Instead, any developer can set up the project environment by running `npm i`. This command reads the `package.json` file and automatically downloads all the required Node modules.
- When you clone a repository, the `node_modules` directory isn't included. Running `npm i` will recreate it by installing all packages listed in `package.json`.

> To prevent Git from tracking your `node_modules`, add it to a `.gitignore` file. This file tells Git which directories and files to ignore.

## Uninstalling packages

npm makes it easy to manage your packages and delete or reinstall when necessary. To remove a package from your project, use:

```bash
npm uninstall <package-name>
```

Replacing `<package-name>` (including the `<` and `>`) with the name of the package. As an example, to uninstall the validator package, run this command now:

```bash
npm uninstall validator
```

This command deletes the package from your `node_modules` directory. It also removes `validator` from the `package.json` file, ensuring that your project and its dependency list remain synchronized.
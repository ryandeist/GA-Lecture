# Intro to Node - Requiring and Using Node Packages

## Using a Node package

We're going to make use of the validator package, so install it with:

```bash
npm i validator
```

Let's explore how to require and use its validation methods in our project.

### Requiring and using validator

1. **Review package docs**: Before using a package, it's important to consult its documentation. Review the [validator documentation on npm](https://www.npmjs.com/package/validator) for detailed information and usage examples.

2. **Require validator**: At the top of `server.js`, bring the package into this file using CommonJS `require()` syntax:

   ```javascript
   const validator = require('validator');
   ```

   Using `const` ensures that the `validator` variable won't be reassigned accidentally.

   > The *require* function loads the specified module. If a ***file path*** is given for a module (such as `require('./myModule')`), it directly loads the file. If a ***package name*** is provided (such as `require('validator')`), Node looks for the module in the `node_modules` directory.

3. **Test a method**: Select a method from the `validator` docs - let's use `isEmail()`. We know from the docs that this method will return `true` or `false` depending on whether or not the value passed into this function is formatted as an email address.

   Let's try it:

   ```javascript
   console.log(validator.isEmail('test@example.com')); // Expected: true
   console.log(validator.isEmail('not-an-email')); // Expected: false
   ```

   This will log whether these provided strings are formatted as email addresses.

4. **Run your code**: Run the test file in the terminal.

   ```bash
   node server.js
   ```

   Check your terminal output to see the results!

## Practice

Validate the casing of a string! Using the [validator docs](https://www.npmjs.com/package/validator) as your guide, try out the `isUppercase()` method.

Test if `'HI THERE'` is uppercase, and log the result.

> Some large packages even have their own website with documentation. Usually, these packages will have a link to their website on their npm registry page or any GitHub documentation they may have.
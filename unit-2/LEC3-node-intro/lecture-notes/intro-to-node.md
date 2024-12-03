# Intro to Node

## Concepts:
Node.js is a JavaScript runtime environment that allows JavaScript apps to run outside of a browser. It is *NOT* a programming languages.

Node has several core feature that make it valueable.
- JavaScript everywhere. Allows JS to be used to make both back and front end applications. 
- Built-In Libraries: Node comes w. libraries enabling features like file system interactions and HTTP communication.
- Cross Platform: Node runs on major platform, simplifying programming for other all types of browswers and devices. 
- Fast. 
- Community Support - Has been developed and tested thoroughly by the community and will continue to be. 

Also has access to npm(Node Package Manager), the largest collection of open source libraries.

Node can be used for a variety of applications like,:
- Automation/Scripting Tools
- Creating chat application and gaming servers. 
- Building apps that interact with file systems.
- Developing Web Servers to build restful APIs.


## Node's Built-In Modules:
A -module- is a reusable block of code. Specifically in Node, a module refers to a specific JS file that can be easily used used in other JavaScript files to enable modular programming. 

Core Modules: 
- http: Allows us to create and handle web servers.
- fs: ALlows us to read and write to the file system. 

Always read the documentation for a module. 

Understand writeFile():
writeFile is a method in the fs module. It requires three parameters. 
- file: A string specifying a files name. 
- data: The content to be written to the file. 
- callback: A function that executes after the file is created. 

There is also an [options] parameter than can be used to perform specific things. 

Implementing writeFile():
Putting this into practice, lets put some code in the server.js file (line 9)

What is happening in the code:
- Requiring the fs module: the fs is required to access the module. 
- Using writeFile() we create a hello.txt file and write the text, "hello, friend" into it. 
- Our callback function logs a message to the console upon file creation. 

## Intro to npm:
Primarily used for installing and managing dependencies in node apps. 

### What is npm:
It is command line utility in node that aides in setting up managing and maintaining node apps. Its used to:
1. Initialize Node Projects
2. Install packages: Allows the installation of 3rd party libs and frameworks.
3. Manage dependencies: managing the different versions of dependencies. 

npmjs.com offers over 1.3 million packages in their registry, these are applications other developers have written and published to npm. Some examples include:
- *validator* - used to to help validate a string of data.
- *express* - facilitates the creation of web servers. 

npm can also be a platform for publishing your own packages to the community. 

## Setting up a Node Application:
1. Ensure you are in the root of your Project
2. Project initialization 
    a. Custom initialization
        npm init, followed by entering custom values for the set up fields. 
    b. Quick initialization
        npm init -y, this automatically fills out set up fields w/ defaults.

### Understanding package.json
The package.json file fills many roles, but has two primary purposes
- Lists project metadata like name, version, and description
- Lists dependencies, the external packages your project needs to function. 

## Installing Node Packages:
### Installing a package
installing validator, which validates and sanitizes strings like:
    isDate()
    isEmail()
    toBoolean()
    normalizeEmail()
To install a package, type the below in the terminal. 
`npm i <package-name>`

The installation process:
- Package download
- Where does this code live? It lives in the `node_modules` directory 
- Using the package: To use the package you need to make it accessible in your js file with a require() statement. 

### Exploring package.json
Any packages we install will be added as a 'dependency' in our package.json file

### Reinstalling dependencies
Occaisionally, you will have to delete and reinstall your dependencies, whch can be done by deleting the 'node_modules' directory and typing 'npm i' in the terminal. 

### Keeping `node_modules' out of git repos
Because package.json stores all the relavant information about our modules, there is no need to keep the bulky and invasive `node_modules` file. 

To prevent git from tracking the `node_modules` files, we would add them to a `.gitignore` file which tells Git which directories and files to ignore when pushing code.  

### Uninstalling packages
`npm uninstall <package name>`

## Requiring and Using Node Packages:
Requiring and using validator:
1. Read the docs on npmjs.com
2. Require validator
    ex const <package> = require('<package>');
    ex: const validator = require('validator');
3. Test a method
    In this case we will use the isEmail() method to test.
    console.log(validator.isEmail('test@example.com')) //Expected true
    console.log(validator.isEmail('not-an-email')) //Expected false 

## CJS vs ESM Modules:
### CommonJS vs ECMAScript modules
#### CommonJS 
Designed to fill a void JavaScript. Long ago there wasn't a great way to modulize JS, but CJS allows us to define code for reuse. 
    Syntax: `require()` to import and module.exporta to export
    Compatibility: Native to Node and widely supported by most server side frameworks.
    EX: 
- To import: `const myModule = require('myModule');`
- To export: 
```javascript
const myFunction = () => {
    console.log('Send me anywhere, I'm ready!');
};

module.exports = myFunction;
```

#### ECMAScript modules (ESM)
The modern, official standard for module management in JavaScript. Created to provide a standard, built0in module system that can be used across different platforms. 
Syntax: uses `import` and `export` statements
Compatibility: Natively supported in modern browsers.

EX:
- To import: `import myModule from 'myModule'`
- To export: 
```javascript
const myFunction = () => {
    console.log('Send me anywhere, I'm ready!');
};

export default myFunction;
```
### When to use CJS?
- Node applications
- Working on projects with legacy code

### When to use ESM?
- Web Development: ESM is the only option for websites and web apps.
- Starting new projects in node: ESM is the latest standard.
- Sharing code between the browser and server. ESM makes this possible because CJS cannot be used to make client side code. 

## More About Node:
### Enthusiasm for Node
#### Developer Flexibility:
- Allows developers to use JavaScript everywhere, making it easier to work across the whole stack.
- Developer Utilization: Allows companies to have a more efficient and flexible developer workforce.

#### Business Implications:
- Cost Savings: Increased server performance and developer efficiency
- Wide Adoption: Node has been adopted widespread over several industries. 

### Node and performance
Node is highly performant, allowing business to handle more traffic with less hardware. This is thanks to Node's architecture.

#### Asynch and event-driven architecture:
Input/Output operations, especially network requests, can be time-consuming and often the bottle neck in web apps. 
- Node uses Asynch and event-driven architecture, meaning Input/Output operations to not block execution of other tasks in an app.
- As a result, Node can efficiently support a large number of concurrent connections. 

                

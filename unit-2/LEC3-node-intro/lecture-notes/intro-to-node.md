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

                

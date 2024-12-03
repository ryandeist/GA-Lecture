# Intro to Node - Node's Built-In Modules:
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
const validator = require('validator');

const multiply = (a, b) => {
    return a * b;
};

const product = multiply(5, 8);

// console.log(product);

const fs = require('fs');

// fs.writeFile('./hello.txt', 'hello, friend', () => {
//   console.log('done creating file');
// });

// console.log(validator.isEmail('test@example.com')) //Expected true
// console.log(validator.isEmail('not-an-email')) // Expected false 

console.log(validator.isUppercase('HI THERE')) // Expected True
console.log(validator.isUppercase('Hi There')) // Expected false 
console.log(validator.isUppercase('hi there')) // Expected false 
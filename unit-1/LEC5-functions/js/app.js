console.log('It\'s Monday!');
console.log('Intro to Functions');


const x = 5; // this is a statement. Roughly, a statement 
// performs an action. Does something.
x // an expression. Produces a value and 
//can written wherever a value is expected. Has a value. 

// Functions!! 

// Functions are a way to give a block of code a name.
// This block of code is therefor stored and can be executed at anytime
// think of them as a variable that contains a block of code. 

// This lets us MODULARIZE our code. 
    //Consider the different jobs in a kitchen.
    // One person chopping, one person sauteeing, one person baking, etc.

    //We want to break each large problem into a small problem. 
    // Solving for specific pieces of that problem. 

// This lets us write code that is Substanially more DRY (Do not Repeat Yourself)
// A great function should be a BLACK BOX
// Meaning a device, system or object which can be viewed in terms of inputs
// and outputs, without any knowledge of its internal working.

// DECLARING A FUNCTION *Functions should have a nice semantic name *

// 'function', name of the function, (), and then a block of code.

function printHello() {
    console.log("I am function printHello.")
    console.log("Hello, nice to meet you!")
}

console.log(printHello);

// INVOKING/CALLING/EXECUTING
// write the name of the function followed by ()

printHello() // this means we are CALLING the printHello function.

// ex -- write a function called sayHi the just prints "Hi" to the console. 

function sayHi () {
    console.log('Hi!');
}

// In Javascript, FUNCTIONS ARE VALUES
sayHi // This is a variable
sayHi() // this is executing the function

// To check data type, uses typeOf

console.log(typeof sayHi);

// ARROW FUNCTIONS ES6
// You can declare them the same way you declare other functions.
// For this lesson we will use ARROW FUNCTIONS

// declaring an arrow function
// note: NEVER DECLARE A FUNCTION WITH 'LET' 
// ALWATS USE CONST

const printHappyHolidays =  () => {
    console.log('Merry Christmas');
    console.log('Happy Holidays');
    console.log('Happy Hannukah');
} ;

printHappyHolidays();

// write and arrow function called printSum that prints the result of 10+10

const printSum = () => {
    console.log(10 + 10);
} ;

printSum ();

// Write a function called printTriangle that will print pound signs in the shape of a pyramid 
// to the console using using one console.log

const printTriangle = () => {
    let printLine = "";
    for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= i; j++) {
                printLine += "#" // printLine = printLine + "#"
            }
        printLine += "\n" // escape character for newLine
    }
    console.log(printLine);
}

printTriangle();

// another solution

const printTriangleTwo = () => {
    let printLine = "";
    for(let i = ``; i <= 5; i++) {
        printLine += '#';
        console.log(printLine);
    }
}

printTriangleTwo();

//extra challenge 

//    #
//   ##
//  ###
// ####
//#####    

// Naming Functions Properly

// Function names should ALWAYS BE or START WITH a verb. 
// It is doing something. Functions DO things. 
//          - get and retrieve data (ie: getUserPets())
//          - set/store data (ie: addNewContact())
//          - check something (ie: checkCards())
//          - print stuff (output) -- (ie: printScoreBoard())
//
// Function names should indicate what a function does as precisely as possible.

// consider a function that checks something
// The following function will check input, which should be a string  to see if it is over
// 10 characters

const checkInputLength = (input) => { // INPUT is a PARAMETER
    if(input.length > 10) {
        console.log("Input length is greater than 10.");
    } else {
        console.log("Input length is less than 10")
    }
}

checkInputLength('horse');
checkInputLength("Peter Pettigrew");

// we sat f "HAS A PARAMETER"
// this is input to the function
// functions often take some input and often produce some output. 
// inputs can change.

// ie lets define  a function that has a parameter

const greet = (name) => {
    console.log(`Hello, ${name}`);
};

// we can specift the value of the param inside the ()
greet("Ryan");

// ARGUEMENT when you call a function and tell it what the value(s) will be for its 
// parameter(s), you are giving the function ARGUMENT(s);

// We say we are "PASSING IN" and arguement. 
// i.e. above, we called the greet() function and passed in the string "Ryan as an arguement"

// ARGUMENT vs PARAMETER

// const functName = (PARAMETER) => {
    //some code that works with PARAMETER
//}

// functName(ARGUEMENT);

// Write a function that printParameter that takes a parameter input. The function should 
// simply display a console.log the value of the input parameter. 

const printParameter = (input) => {
    console.log(input);
}

printParameter("ANYTHING");
printParameter([1, 2, 3]);

// write a function called minusOne that takes a parameter num. Assuming the argument is a number, 
// print the argument -1 

const minusOne = (num) => {
    console.log(num - 1);
}

minusOne(1000);


// MULTIPLE PARAMETERS 

// Functions can take more than one parameter and in turn take multiple arguments.

// ie. calculate area --- a funtion that calculates the area of a rectangle.

const calculateArea = (height, width) => {
    console.log(height * width);
}

calculateArea(5, 2);

// make a function called writeSentence that takes three params.
// concatenates them into a sentence and log the sentence. 

const writeSentence = (name, age, location) => {
    console.log("My name is " + name + ". I am " + age + " years old and live in " + location +".");
}

writeSentence("Ryan", 31, "Baltimore");

/// OUTPUT ///
// return does two things.
//      -allows out function to produce an output value
//      - stops the execution of the function IMMEDIATELY
//          - if you are in a loop, it will stop it.

// i.e. using return to stop a function

const countToTen = () => {
    let x = 0;

    while(true) {
        console.log(x);
        x++

        if (x > 10) {
            return // this stops what would have been an infinite loop
        }
    }
}

countToTen();

// i.e USE return to make a function produce an output value

const getTen = () => {
    return 10 // when called, this function will output the value of 10
}

console.log(getTen) // returns the code of the function getTen
console.log(getTen()); // the FUNCTION CALL getTen is an expression whole value is 10

// Why do we have retur  values?
// BC THE ALLOW FUNCTIONS TO OUT VALUES THAT CAN BE USED ELSEWHERE IN THE PROGRAM
// In other words, functions output a value

const ten = getTen();
console.log("Here is the value returned from getTen()")
console.log(ten);

// Now getTen and ten are interchangable.

const addTwoNums = (a, b) => {
    const outputSum = a +b;
    return outputSum
}

addTwoNums(13, 14); //prints nothing, but does generate a value. 
// must be saved to variable or wrapped in a console.log.
console.log(addTwoNums(13,14));

const sum = addTwoNums(6, 56);
console.log(sum);

// Write a function called getRectArea that takes two parameters, height and width.
// multiplies and returns the result
// no console.log

const getRectArea = (height, width) => {
    const area = (height * width);
    return area;
};

firstRectArea = getRectArea(7, 13);
console.log(firstRectArea);

// i.e. CALLING a FUNCTION with a IF statement.
// Write a function that takes two parameters (strings) and returns
// true (BOOLEAN) if the two strings are identical, false if not. 

const checkSameString = (str1, str2) => {
    if(str1 === str2) {
        return true
    } else {
        return false
    };
};

console.log('checkSameString("Charlie", "Charlie")', checkSameString("Charlie", "Charlie"));
console.log('checkSameString("Charlies", "Alpha")', checkSameString("Charlies", "Alpha"));


function planetHasWater(planet) {
    if (planet === 'earth') {
        console.log(true);
} else if (planet === 'mars') {
        console.log(true);
}   else {
        console.log(false);
}
}

planetHasWater('pluto');

function calculateTax(cartValue) {
    const taxDue = cartValue * 0.07;
    return taxDue;
};

function calculateTotal(cartValue) {
    return cartValue + calculateTax(cartValue);
};

console.log(calculateTotal(100));

function computeArea(width, height) {
    area = width * height 
    return (`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`);
}

console.log(computeArea(5, 25));

const square = (num) => {
    return num * num;
};

console.log(square(5)); // returns 25


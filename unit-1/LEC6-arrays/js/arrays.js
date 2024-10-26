/*
-- Arrays -- 

 - Array is a data type in JS
 - Technically, it is a data structure. Its a list. 

 - You can declare an array. 
ie:
*/

const arr = [] // don't call an array "array"

console.log(arr); // returns an empty array

/*
 - Arrays contain ELEMENTS, separated by commas. 
 - An element in an array can ANY data type.
 - While Arrays can contain multiple data types, in practice all elements will be 
the same data type

EXAMPLE: Declare an array of strings
*/

const furnitureList = ['chair', 'table', 'couch', 'TV Stand', 'desk', 'bed']

const listOfSquares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

console.log (typeof furnitureList); // 'returns object'
console.log (typeof listOfSquares); // 'returns object' 

/* 
- typeof of any array will return 'object'
- If you want to check if an array is an array use array.isArray
*/

console.log(Array.isArray(furnitureList)) // will return a true or false value. 

const faveFoods = ['nachos', 'sushi', 'wings', 'ramen', 'tacos', 'hamburgers']

console.log(faveFoods);

/*
-- ACCESSING ELEMENTS --

    - All array elements have an INDEX number that can used to access said element.
    - Index numbers start at 0.
    - To access elements, use square brackets ([]) containing the index number of the 
    specific.
*/

console.log(furnitureList[2]); // returns the third object of the furnitureList array

const ghostBusters = [
    "Venkman",
    "Spengler",
    "Stantz",
    "Zeddermore",
    "Melnitz",
    "Barrett",
    "Tully"
  ]

// Access third element

console.log(ghostBusters[2]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// indexOf can find the index # of a element in an array.

console.log(ghostBusters.indexOf('Tully')); // Shows what index # 'Tully' is in ghostBusters

/*

Array Length (.length)
  - .length property on all arrays, not matter how many elements.
  - console.log(arrayName.length) will tell us how many elements are in that array.

*/

console.log(ghostBusters.length);
console.log(`The members of the Ghostbusters are ${ghostBusters}`);

/*

You can use an expression whose value is a number as an array index
an expression that evaluted to a value is == the value

Example: Without hardcoding 6, pring the last element of ghostBusters array
*/ 

lastIndex = ghostBusters.length - 1 // assigns the last element of ghostBusters to lastIndex
console.log(lastIndex);
console.log(ghostBusters[lastIndex]);
console.log(ghostBusters[ghostBusters.length - 1]); // also prints the last element of ghostBusters

/*
CHANGING ELEMENTS IN AN ARRAY

  You can change an element by accessing it and using an assignment operator
  In an array, you can change elements, but can not change the actualy array

*/

const veggies = ['red pepper', 'carrot', 'corn', 'pumpkin', 'brocolli'];
console.log(veggies);
veggies[1] = 'spinach'; // changes carrot to spinach
console.log(veggies);

// example - without using 4, change the last element in the veggies array to cauliflower

const lastVegetable = veggies.length - 1 // defines lastVegatable to the last index for veggies.
console.log(lastVegetable); // logs the index of the last vegitable of veggies.
veggies[lastVegetable] = 'cauliflower'; // changes the last index of veggies to cauliflower
console.log(veggies);

/* You can use any expression to reach an index location 
    ie. console.log(array[3*2])

-- INTERATING --

  Using a loop to access the elements in an array in order is call iterating. 
  Terminology -- you interate "OVER" and ARRAY
  */

const kitchenSink = ['dirty spoon', 'sponge' , 'messy plate', 'soap', 'water'];

for (let i = 0; i < kitchenSink.length; i++) { //Example a for Loop: Print every item in the array using a loop.
    console.log(kitchenSink[i]);
}; 

for (const item of kitchenSink) { // example of a for...or loop.
    console.log(item);
};

/*
 For...of: 
    Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    for (const item of kitchenSink) {
        console.log(item);
    };
*/

kitchenSink.forEach((item) => {
    console.log(item);
});

/*
    For...each:
    Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

-- ARRAY METHODS --

    - A method is a function on a class or object. 
     

Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    - .push(element) -- adds an element to the end of an array. By default, we add to the end.
    You can add as many elements as you what, separating each new element with a comma.
*/

kitchenSink.push('faucet', 'bowl', 'brush');
console.log(kitchenSink);

// -.pop() -- removes from the end of the array

kitchenSink.pop();
console.log(kitchenSink);


// -.shift() -- removes an elements from the beginning of the array


kitchenSink.shift();
console.log(kitchenSink);

// - .unshift() -- adds an element to the beginning of the array/

kitchenSink.unshift('mug');
console.log(kitchenSink);

// -.splice(indexToStartRemoving, numberOfElementsToRemove)

const returnedFromSplice = kitchenSink.splice(4, 2);
console.log(kitchenSink);
console.log(returnedFromSplice);

// .indexOf(element you are looking for);

const theIndex = kitchenSink.indexOf('soap');
console.log(theIndex);
/*
-- MULTI DIMENSIONAL ARRAYS --
      Arrays can contain other arrays as elements.
*/

const pairs = [['Snoopy', 'Linus'], ['Peppermint Patty', 'Woodstock']]
console.log(pairs.length) // returns 2.

// EXAMPLE Print Peppermint Patty 
console.log(pairs[1][0]) // pairs [1] is an array, so paris [1][0] is an element in that array

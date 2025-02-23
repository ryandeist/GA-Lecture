console.log('Control Flow Practice');

// if...else if...else

console.log('Example of if...else if...else');
const color = 'green';

if (color === 'red') {
console.log('Stop');
} else if (color === 'yellow') {
console.log('Slow');
} else if (color === 'green') {
console.log('Go!');
} else {
console.log('Whatever');
};

// for loops

console.log('Result of a FOR LOOP');

for (let i = 1; i < 10; i++) {
    console.log(i);
}

for (let i = 1; i < 21; i++) {
    console.log(i * i);
};

// nested branch statement 

const dayOfTheWeek = 'Friday';
const isAfternoon = false;

if (dayOfTheWeek === 'Friday') {
    if (isAfternoon) {
        console.log('Almost the weekend!');
    } else { 
        console.log('Happy Friday Morning!');
    }
} else {
    console.log('It\'s not Friday.');
};

// Ternary 

let num = 10;

let message = num > 5 ? 'num is larger than 5' : 'num is less than 5';

console.log(message);

// switch statement practice 

// example of if...else if... else statement

const seasonCheck = 'autumn';

if (seasonCheck === 'summer') {
    console.log('It\'s Summer!');
} else if (seasonCheck === 'fall') {
    console.log('It\'s Fall!');
} else if (seasonCheck === 'spring') {
    console.log('It\'s Spring');
} else if (seasonCheck === 'winter') {
    console.log('It\'s Winter');
} else {
    console.log('Invalid Season');
};

// above code as a switch. 

switch (seasonCheck) {
    case 'summer':
        console.log('It\'s Summer!');
        break;
    case 'fall':
    case 'autumn':
        console.log('It\'s Fall!');
        break;
    case 'spring':
        console.log('It\'s Spring');
        break;
    case 'winter':
        console.log('It\'s Winter');
        break;
    default:
        console.log('Invalid Season');
}

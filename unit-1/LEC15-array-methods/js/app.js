console.log('array methods');

const arr = ['Deja', 'Gore', 'Hunter'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

arr.forEach((name) => {
    console.log(name);
});

// Callback: is a function that is passed to another function as an argument.

// Higher order functions/methods like forEach is a function that takes another function as an argument or returns them as an output. 

// .forEach();
// runs the provided code once for each element in an array. 

const friends = ['rOSs', 'rAChel', 'joey', 'mOnICa', 'phoebe', 'chandler'];

// lets declare a callback function

const sendEmail = (name) => {
    console.log(`Sending email to ${name}`);
};

// Invoking the higher order array method bt passing in 'sendEmail' function as a callback.

friends.forEach(sendEmail);

// Why are we not calling the sendEmail function... No ()

// We only need to reference the function that the forEach method will run later. 

// This is what the forEach produces
// sendEmail(arr[0]);
// sendEmail(arr[1]);
// sendEmail(arr[2]);
// sendEmail(arr[3]);

// Create a copy of the friends array, with all first letter upper cased. 

const friendsUpperCase = [];

const arrayToUpperCase = (name) => {
    const nameUpperCase = name.toUpperCase();
    friendsUpperCase.push(nameUpperCase);
};

friends.forEach(arrayToUpperCase);

console.log(friendsUpperCase);

// .map
// It will create a new array from the source array, "transforming" its values. The returned array is always the same length a the source. 

const friendsFLUpperCase = friends.map((name) => {
    const firstLetterCap = name[0].toUpperCase();
    // Grabbing the first character of each array element and turning it upper case
    return firstLetterCap + name.substring(1).toLowerCase();
    // concate our capitalized the first character. to the rest of the string, lower cased. 
});

console.log(friendsFLUpperCase);

const numbers = [
    15,
    18,
    3921,
    327,
    88,
    1235,
    1,
    55855,
    34,
    5,
    9,
    9019,
    156,
    874,
    76,
    444,
    12346
]

const squares = numbers.map((num) => num * num);

console.log(squares);

// .map() with index (optional)

const arrFruits = ['apple', 'banana', 'orange'];

const mappedFruits = arrFruits.map((element, index) => {
    return `element is: ${element} and the index is: ${index}`
});

console.log(mappedFruits);

// .filter();
// It creates and returns a new array with the elements that match the condition inside of the callback. 

// declare a function that we will use as a callback. 

const greaterThan100 = (num) => {
    if (num > 100) {
        return true;
    } else {
        return false;
    };
};

const greaterThan100Array = numbers.filter(greaterThan100);

const greaterThan100Arr = numbers.filter((num => {
    return num > 100;
}))

console.log(greaterThan100Array);
console.log(greaterThan100Arr);

const states = [
    {
        name: "Alabama",
        capital: "Montgomery",
        lat: "32.361538",
        long: "-86.279118"
    },
    {
        name: "Alaska",
        capital: "Juneau",
        lat: "58.301935",
        long: "-134.419740"
    },
    {
        name: "Arizona",
        capital: "Phoenix",
        lat: "33.448457",
        long: "-112.073844"
    },
    {
        name: "Arkansas",
        capital: "Little Rock",
        lat: "34.736009",
        long: "-92.331122"
    },
    {
        name: "California",
        capital: "Sacramento",
        lat: "38.555605",
        long: "-121.468926"
    },
    {
        name: "Colorado",
        capital: "Denver",
        lat: "39.7391667",
        long: "-104.984167"
    },
    {
        name: "Connecticut",
        capital: "Hartford",
        lat: "41.767",
        long: "-72.677"
    },
    {
        name: "Delaware",
        capital: "Dover",
        lat: "39.161921",
        long: "-75.526755"
    },
    {
        name: "Florida",
        capital: "Tallahassee",
        lat: "30.4518",
        long: "-84.27277"
    },
    {
        name: "Georgia",
        capital: "Atlanta",
        lat: "33.76",
        long: "-84.39"
    },
    {
        name: "Hawaii",
        capital: "Honolulu",
        lat: "21.30895",
        long: "-157.826182"
    },
    {
        name: "Idaho",
        capital: "Boise",
        lat: "43.613739",
        long: "-116.237651"
    },
    {
        name: "Illinois",
        capital: "Springfield",
        lat: "39.783250",
        long: "-89.650373"
    },
    {
        name: "Indiana",
        capital: "Indianapolis",
        lat: "39.790942",
        long: "-86.147685"
    },
    {
        name: "Iowa",
        capital: "Des Moines",
        lat: "41.590939",
        long: "-93.620866"
    },
    {
        name: "Kansas",
        capital: "Topeka",
        lat: "39.04",
        long: "-95.69"
    },
    {
        name: "Kentucky",
        capital: "Frankfort",
        lat: "38.197274",
        long: "-84.86311"
    },
    {
        name: "Louisiana",
        capital: "Baton Rouge",
        lat: "30.45809",
        long: "-91.140229"
    },
    {
        name: "Maine",
        capital: "Augusta",
        lat: "44.323535",
        long: "-69.765261"
    },
    {
        name: "Maryland",
        capital: "Annapolis",
        lat: "38.972945",
        long: "-76.501157"
    },
    {
        name: "Massachusetts",
        capital: "Boston",
        lat: "42.2352",
        long: "-71.0275"
    },
    {
        name: "Michigan",
        capital: "Lansing",
        lat: "42.7335",
        long: "-84.5467"
    },
    {
        name: "Minnesota",
        capital: "Saint Paul",
        lat: "44.95",
        long: "-93.094"
    },
    {
        name: "Mississippi",
        capital: "Jackson",
        lat: "32.320",
        long: "-90.207"
    },
    {
        name: "Missouri",
        capital: "Jefferson City",
        lat: "38.572954",
        long: "-92.189283"
    },
    {
        name: "Montana",
        capital: "Helana",
        lat: "46.595805",
        long: "-112.027031"
    },
    {
        name: "Nebraska",
        capital: "Lincoln",
        lat: "40.809868",
        long: "-96.675345"
    },
    {
        name: "Nevada",
        capital: "Carson City",
        lat: "39.160949",
        long: "-119.753877"
    },
    {
        name: "New Hampshire",
        capital: "Concord",
        lat: "43.220093",
        long: "-71.549127"
    },
    {
        name: "New Jersey",
        capital: "Trenton",
        lat: "40.221741",
        long: "-74.756138"
    },
    {
        name: "New Mexico",
        capital: "Santa Fe",
        lat: "35.667231",
        long: "-105.964575"
    },
    {
        name: "New York",
        capital: "Albany",
        lat: "42.659829",
        long: "-73.781339"
    },
    {
        name: "North Carolina",
        capital: "Raleigh",
        lat: "35.771",
        long: "-78.638"
    },
    {
        name: "North Dakota",
        capital: "Bismarck",
        lat: "48.813343",
        long: "-100.779004"
    },
    {
        name: "Ohio",
        capital: "Columbus",
        lat: "39.962245",
        long: "-83.000647"
    },
    {
        name: "Oklahoma",
        capital: "Oklahoma City",
        lat: "35.482309",
        long: "-97.534994"
    },
    {
        name: "Oregon",
        capital: "Salem",
        lat: "44.931109",
        long: "-123.029159"
    },
    {
        name: "Pennsylvania",
        capital: "Harrisburg",
        lat: "40.269789",
        long: "-76.875613"
    },
    {
        name: "Rhode Island",
        capital: "Providence",
        lat: "41.82355",
        long: "-71.422132"
    },
    {
        name: "South Carolina",
        capital: "Columbia",
        lat: "34.000",
        long: "-81.035"
    },
    {
        name: "South Dakota",
        capital: "Pierre",
        lat: "44.367966",
        long: "-100.336378"
    },
    {
        name: "Tennessee",
        capital: "Nashville",
        lat: "36.165",
        long: "-86.784"
    },
    {
        name: "Texas",
        capital: "Austin",
        lat: "30.266667",
        long: "-97.75"
    },
    {
        name: "Utah",
        capital: "Salt Lake City",
        lat: "40.7547",
        long: "-111.892622"
    },
    {
        name: "Vermont",
        capital: "Montpelier",
        lat: "44.26639",
        long: "-72.57194"
    },
    {
        name: "Virginia",
        capital: "Richmond",
        lat: "37.54",
        long: "-77.46"
    },
    {
        name: "Washington",
        capital: "Olympia",
        lat: "47.042418",
        long: "-122.893077"
    },
    {
        name: "West Virginia",
        capital: "Charleston",
        lat: "38.349497",
        long: "-81.633294"
    },
    {
        name: "Wisconsin",
        capital: "Madison",
        lat: "43.074722",
        long: "-89.384444"
    },
    {
        name: "Wyoming",
        capital: "Cheyenne",
        lat: "41.145548",
        long: "-104.802042"
    }
]

// create an array called allCapitalsA with all the states with capitals that start with the letter A. 

//   const allCapitalsA = states.filter((state) => state.capital.charAt(0) === 'A');

// OR 

const allCapitalsA = states.filter((state) => {
    return state.capital[0] === 'A';
});

console.log(allCapitalsA);

// find()
// retunrs the first element in the provided array that matches the provided tesrt function. undefined is returned if not found. 


const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];

  // let's find the first car object in the cars array that has the color white. 

  const firstWhiteCar = cars.find((car) => {
    return car.color === 'white';
  });

  console.log(firstWhiteCar);

// now for a black car?

const firstBlackCar = cars.find((car) => {
    return car.color === 'black';
});

console.log(firstBlackCar);

// returns undefined because a black car does not exist in our array.

// .findIndex()
// returns the first element's index in the provided array that matched the provided testing function. Will return -1 if there nothing matches. 

const firstWhiteCarIndex = cars.findIndex((car) => {
    return car.color === 'white';
});

console.log(firstWhiteCarIndex);

// .some();
// returns a boolean value if at least one element meets/matches the provided condition. 

// let's check if the car in the car array is a Ford.

const hasFord = cars.some((car) => {
    return car.make === 'Ford'; // 'Kia' would return false. 
});

console.log(hasFord);

// .every();
// returns a true boolean if every element in the array meets the condition

const allFord = cars.every((car) => {
    return car.make === 'Ford';
});

console.log(allFord);
// return false. 

// .reduce();
// Literally reduces an array to a single value. Note that the "single value" can be a single object, array- anything. 

const nums = [25, 6, 100, 3];

const totalSum = nums.reduce((accumulator, current) => {
    const sum = accumulator + current;
    // On the first run thru accumulator starts at 0, current is 25.
    // 2nd accumulator = 24 and current = 6.
    // etc.
    return sum;
});

console.log(totalSum);

// Another example of .reduce() using initialValue; 

const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];

// I want to reduce this to a single object with a total of each. 

const tally = votes.reduce((acc, vote) => {
    // #1 element = 'Yes'
    if (acc[vote]) { // false the first time.
        acc[vote] += 1; // first time through will return. 
    } else {
        acc[vote] = 1; // if the key doesn't exist, makes it in the new object. 
    };
    return acc;
}, {}); // initialValue goes after the function. 

console.log(tally);

console.log("INTRO TO OBJECTS");

const someObject = {
    3: 'Some Value',
    someMethod: () => {console.log('Hello World')}
}

// Combination of KEY : VALUE pairs. 

// OOP is the concept of having your code revolved around the exists and use of Objects. 

// Everything in a browser is an object.
// Style and Elements 
// Handle Data. Very Common. Can be used to creat completex data types.
// When data is retrieved from a database, is often stroe as an object. 

// BOXING - even primitive data types like strings and numbers are turned into and object on 
// demand by JS runtime when we want to call a method like toUpperCase

const myName = 'Ryan';
console.log(myName.toLocaleUpperCase());

// Creating Objects
// We use Object literal notation or Oject Initializer.

// const music = {
//     someKey: 'Some Value',
//     someOtherKey: 'Some other value',
//     someArray: [1, 2, 3, 4],
//     someBoolean: true,
//     someObject: {
//         key: 44
//     }
// };

// console.log(music);

// let musicThatChanges = { 

// };

// const someArrayInMusic = music.someArray;
// console.log(someArrayInMusic);

// Manipulating Objects 

const simpleObject = {
    dogName: 'Spike',
    catName: 'Tom',
    mouseName: 'Jerry',
    count() { // method inside simpleObject that counts down from 10.
        for( let i = 0; i < 10; i++) {
            console.log(10 - i)
        }
    }
};

simpleObject.count();


simpleObject.mouseName = 'Jerry2.0'; // changing value for existing K:V pair
console.log(simpleObject);

simpleObject.birdName = 'Zazoo'; // adding new K:V Pair
console.log(simpleObject);

simpleObject['birdName'] = 'Zazooo2.0'; // changing value for existing K:V pair using brackets
console.log(simpleObject);

simpleObject.birdName = [simpleObject.birdName, 'Tweety', 'Mr. Owl', 'Bird 1'];
console.log(simpleObject);

simpleObject.birdName[3] = 'Toucan Sam'; // accessiing and changing one item of an array.
console.log(simpleObject);

simpleObject.birds = simpleObject.birdName; // repeating a key
console.log(simpleObject);
delete simpleObject.birdName; // delete a key.
console.log(simpleObject);


// Object.values()

const myInfo = {
    firstName: 'Ryan',
    lastName: 'Deist',
    SSN: 123456789,
    DOB: 19930530,
}

const values = Object.values(myInfo); // lists values of an object

const keys = Object.keys(myInfo); // lists keys of an object

const findKeyForValue = (obj, val) => {
    const keys = Object.keys(obj)
    for(let i  = 0; i < keys.length; i++) {
        if(obj[keys[i]] === val) {
        return keys[i]
        }
    }
}

console.log(findKeyForValue(myInfo, 'Deist'));

// Object.entries

const entries = Object.entries(myInfo);

for(let entry of entries) {
    if(entry[1] === 'Deist')
        console.log[entry[0]]
}


const complexObj = {
    someKey: 'some value',
    someArray: [1, 2, 3, 4],
    someNumber: 12,
    someOtherObject: {
        someKey: 1,
        someNestObject: {
            someNestedArray: [
                {
                    key1: 1
                },
                () => {
                    console.log('here')
                }
            ]
        }
    },
    lastKey: 'last value',
    "This key has spaces": "still valid"
}

const user256 = {
    name: 'Ryan Deist',
    address: '1520 Clarkson St, Baltimore, MD 21230',
    deliveryAddresses: [
        '8504 Shady Pine Circle, Montgomery Village, MD 20886'
    ],
    paymentMethods: [
        {
            ccNum: '9999 9999 9999 9999',
            expDate: '07/2024',
            secCode: '999',
            billingZip: '99999',
        },
    ],
    wishLists: [
        {
            title: 'Birthday',
            items: [
                {
                    itemName: 'Tent',
                    itemPrice: '99.00',
                    itemDescription: '4 person tent',
                },
                {
                    itemName: 'Headphones',
                    itemPrice: '399.00',
                    itemDescription: 'Bose Headphones',
                },
                {
                    itemName: 'Keyboard',
                    itemPrice: '199.00',
                    itemDescription: 'Corsair Keyboard',
                }
            ]
        }
    ] 
}

const listWishListItems = (user, listName) => {
    const wishLists = user.wishLists
    for (list of wishLists ) {
        if (list.title === listName) {
            for (item of list.items) {
                console.log(item)
            }
        }
    }
}

listWishListItems(user256, 'Birthday');


const music = {  
    currentTrack: 'Just Ken',
    volume: 70,
};

music.currentPlaylist = ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night']; // creates new key 'currentPlaylist' and adds array of songs to the value.

console.log(music.currentPlaylist); // logs the value of currentPlaylist in the music object

console.log(music.currentPlaylist[0]); // logs the value of the 1 index of the currentPlaylist Array

music.volume = 60; // changes the value of the volume key in the music object to 60.

delete music.currentPlaylist // deletes currentPlaylist property from the object music. 

music.mute = function () { // adds the method 'mute' to music, which reassigns the volume key to a value of 0 when called. 
    music.volume = 0;
};

music.mute(); // calls the mute method within music.

music.myPlaylist = ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'];

music.trackIdx = 0;

console.log(music.myPlaylist[music.trackIdx]); // logs the current track using trackIdx at the array index of myPlaylist.

music.next = function () { // created a method in music that adds one to trackIdx when called
    music.trackIdx =+ 1;
    music.currentTrack = music.myPlaylist[music.trackIdx]; // updates current track value to reflect the correct song playing based on trackIdx.
};

console.log(music);

music.next();

console.log(music); 

alert("this is an alert")

const UserResponse = ('What do you want to do?');

// confirm true or false. 







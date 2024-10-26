console.log('Intro to JS Classes');

//example of an object using object literal notation. 
const myFirstCar = {
    make: 'Toyota',
    model: 'Corolla',
    color: 'Black',
    isRunning: false,
    start: function () {
        myFirstCar.isRunning = true;
        console.log('Running');
    },
};

class Car {
    // the constructor is always called
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.isRunning = false; // default is false
        this.isStopped = true;
        // return is not needed 
        // because the new obect is returned by default
        this.color = color;
    };
    start() {
        this.isRunning = true;
        this.isStopped = false;
        console.log('Running!');
    };
    stop() {
        this.isStopped = true;
        this.isRunning = false;
        console.log('Stopped!');
    };
    static about() {
        console.log('I\'m the Car class!');
    };
    // override a prototype method
    toString() {
        return `This car is a ${this.color} ${this.make} ${this.model}.`;
    };
};

const myCar = new Car('Ford', 'Bronco', 'Green');
console.log(myCar); // {make: 'Ford', model: 'Bronco'}

Car.about() // I'm the Car class!

class ElectricCar extends Car {
    constructor(make, model, color, batteryCharge) {
        super(make, model, color);
        this.batteryCharge = batteryCharge;
    };
    start() {
        if (this.batteryCharge > 0) {
            this.isRunning = true;
            console.log('Your electric car is running!');
        } else {
            this.isRunning = false;
            console.log('Time to recharge.');
        };
    };
};

const myVolvo = new ElectricCar('Volvo', 'EX30', 'Gray', 100); // Fully Charged!



myVolvo.start() // "Your electric car is running"
myVolvo.batteryCharge = 0;
myVolvo.start() // "Time to recharge"

const mySubaru = new Car('Subaru', 'Crosstrek', 'blue');

console.log(mySubaru.toString()); // "[object Object]"



class SportsTeams {
    constructor(city, mascot, league) {
        this.city = city;
        this.mascot = mascot;
        this.league = league;
        this.isPlaying = false;
    };
    gameOn() {
        this.isPlaying = true;
    };
};

const teamOne = new SportsTeams('New York', 'Jets', 'NFL');

const teamTwo = new SportsTeams('Los Angeles', 'Lakers', 'NBA');

console.log(teamOne, teamTwo);



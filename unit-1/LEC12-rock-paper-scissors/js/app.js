/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors']; // choices in the game won't change, and are global in scope.

/*-------------------------------- Variables --------------------------------*/
// the three pieces of information we need to track in STATE. 
let playersChoice;
let computersChoice;
let message;

/*------------------------ Cached Element References ------------------------*/
// creating a cached element for us to interact with the <p> with an id of result-display 
const resultDisplayEl = document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/


const getPlayersChoice = (event) => {
    playersChoice = event.target.id; // sets playerChoice when event happens and play is run. 
    //console.log('getPlayersChoice:', event); // checking to make sure getPlayChoice is working.
};

// function that sets computersChoices to a random item from our array choices when called. 

const getComputersChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computersChoice = choices[randomIndex];
};

// function that compares variables and displays a result message based on win condiditons of the game. 

const compare = () => {
    if (playersChoice === computersChoice) {
        message = 'You tied! Play Again?';
    } else if (playersChoice === choices[0] && computersChoice === choices[2]) {
        message = 'You Win! Play Again?';
    } else if (playersChoice === choices[1] && computersChoice === choices[0]) {
        message = 'You Win! Play Again?';
    } else if (playersChoice === choices[2] && computersChoice === choices[1]) {
        message = 'You Win! Play Again?';
    } else {
        message = 'You Lose. Play Again?';
    };
};

// below render function updates the textContent of our display to reflect the current game state. 

const render = () => {
    resultDisplayEl.textContent = `You chose ${playersChoice} and the computer chose ${computersChoice}. ${message}`;
} ;

// the below play function will contain our game logic. 
const play = (event) => {
    getPlayersChoice(event);
    console.log(playersChoice); // log to confirm getPlayersChoice is returning the right data.
    getComputersChoice();
    console.log(computersChoice);
    compare();
    render();
    // console.log(event.target);
    // getPlayersChoice(event);
};

const resetGame = () => {
    playersChoice = null;
    console.log(playersChoice);
    computersChoice = null;
    console.log(computersChoice);
    message = '';
    resultDisplayEl.textContent = message;
};

/*----------------------------- Event Listeners -----------------------------*/
// the below event listener attachs an event listener to all button elements using a forEach iteration on a node list. 
document.querySelector('#reset-button').addEventListener('click', resetGame);

document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);




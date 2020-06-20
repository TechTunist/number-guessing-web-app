var answer = 1 + (Math.floor(Math.random() * 10));


// This is a game that uses alert boxes

// var guess = prompt('Enter a guess between 1 and 10' );

// var numGuesses = 0;



// while (numGuesses < 5) {


//     if (Number(guess) == answer) {
//         alert('YOU ARE CORRECT!!. You must have superpowers to be able to guess correctly! Well Done');
//         break;
//     }
    

//     else if (Number(guess) > 10)  {
        
//         alert('Sorry, pick a nubmer between 1 and 10.');
//         guess = prompt('Enter a guess between 1 and 10');
//         numGuesses++;
//     }

//     else if (Number(guess) == '') {
        
//         alert('Please enter a number between 1 and 10.');
//         guess = prompt('Try Again..');
//         numGuesses++;
//     }
    
//     else if (Number(guess) < answer) {
        
//         alert('Go Higher...');
//         guess = prompt('Try Again..');
//         numGuesses++;
//     }
    
//     else if (Number(guess) > answer) {
//         numGuesses++;
//         alert('Go Lower...');
//         guess = prompt('Try Again..');
//         numGuesses++;
//     }

// };

// alert('You have run out of guesses. Refresh the page to try again.');


// This is a game that uses the DOM
function showGuess() {
    var newElement = document.createTextNode(guess + ' ');
    document.body.appendChild(newElement);
}


let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
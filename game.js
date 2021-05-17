console.log("Hello World");
// Player Selection - receives input from user (rock, paper, or scissors?)

let playerSelection = prompt("rock, paper, or scissors?");

// Change case on playerSelection to capital, then lowercase

//Computer Selection Function
function computerPlay() {

    let computerOptions = ['rock', 'paper', 'scissors'];

    var computerSelection = computerOptions[Math.floor(Math.random() * 3)];
    return computerSelection;

  
}

// playRound function - compare results
function playRound(playerSelection, computerSelection) {
     if (playerSelection === 'rock' && computerSelection === 'rock') {
         return 'You both choose rock! It\'s a tie!';
     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
         return 'You win!';
     } else {
         return 'Sorry, you lost! Please try again.';
     }
  }

//Runs playRound and calls computerPlay to get computerSelection

//const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// Comparison of selections and determination of winner
// If player selects rock, and computer selects rock
// If player selects rock, and computer selects scissors 
// If player selects rock, and computer selects paper


    


    // If player selects paper, and computer selects rock
    // If player selects paper, and computer selects paper
    // If player selects paper, and computer selects scissors

    // If player selects scissors, and computer selects rock
    // If play selects scissors, and computer selects paper
    // If player selects scissors, and computer selects scissors

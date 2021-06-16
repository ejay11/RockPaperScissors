// Player Selection - receives input from user (rock, paper, or scissors?)
function playerPlay() {
    let playerOptions = prompt("Rock, paper, or scissors?");
    playerOptions = playerOptions.toLowerCase();
    return playerOptions;
}


//Computer Selection Function
function computerPlay() {

    let computerOptions = ['rock', 'paper', 'scissors'];

    var computerSelection = computerOptions[Math.floor(Math.random() * 3)];
    return computerSelection;


}
//Initial Scores
let playerScore = 0;
let computerScore = 0;

// playRound function to compare results from selections
function playRound(playerSelection, computerSelection) {

    //let playerSelection = 
    //console.log(playerSelection);
    if (playerSelection === computerSelection) {
        alert('You both choose ' + playerSelection + '! It\'s a tie!');
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore = playerScore + 1;
        console.log(playerScore);
        alert('You win! ' + playerSelection + ' beats ' + computerSelection + '!');
    } else {
        computerScore = computerScore + 1;
        console.log(computerScore);
        alert('Sorry, you lost! ' + computerSelection + ' beats ' + playerSelection + '. Please try again.');

    }
}
//User Button Selection
//create an array from the buttons

const buttons = document.querySelectorAll('button');
console.log(buttons);
// we use the .forEach method to iterate through each button and add a click EventListener to each one
buttons.forEach((button) => {button.addEventListener('click', () => {
      alert('OK, you selected ' + button.id + '. Bold choice!');
      let playerSelection = button.id;
      let computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
}
)});

// Score tracking/display


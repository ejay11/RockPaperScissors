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

    let message = document.querySelector('#message');
    if (playerSelection === computerSelection) {
        message.textContent = 'You both choose ' + playerSelection + '! It\'s a tie!';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore = playerScore + 1;
        console.log(playerScore);
        message.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
    } else {
        computerScore = computerScore + 1;
        console.log(computerScore);
        message.textContent ='Sorry, you lost! ' + computerSelection + ' beats ' + playerSelection + '. Please try again.';

    }
    //Updating Score Display
    const player = document.querySelector('#player');
    player.textContent = 'You: ' + playerScore;
    const computer = document.querySelector('#computer');
    computer.textContent = 'Computer: ' + computerScore;

    //Ending game once a player reaches 5
    if (playerScore == 5) {
        message.textContent = 'Congratulations! You won this round!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        message.textContent = 'Sorry! The computer won this round. :(';
        playerScore = 0;
        computerScore = 0;
    }


}


//User Button Selection
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerSelection = button.id;
            let computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
        })

    }


);
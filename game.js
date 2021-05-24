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

// playRound function - compare results
function playRound(playerSelection, computerSelection) {

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

//Game function to play five rounds of playRound function. Create higher function to get playerSelection via prompt. Call this, computerplay, then playround 5x. Track winners

function game() {
    alert('Let\'s play five rounds of rock paper scissors! Here we go:')
    //Round1
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log('OK! Your score is: ' + playerScore + ' and the computer\'s is: ' + computerScore + '. Let\'s keep going!');

    //Round2
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log('Whew! Your score is: ' + playerScore + ' and the computer\'s is: ' + computerScore + '. Onward!');

    //Round 3
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log('Wow! Your score is: ' + playerScore + ' and the computer\'s is: ' + computerScore + '. Almost done!');

    //Round 4
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log('You tired? You\'re doing great! Your score is: ' + playerScore + ' and the computer\'s is: ' + computerScore + '. One more!');

    //Round 5
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    if (playerScore > computerScore) {
        alert('You won! Your score was' + playerScore + ' and the computer only had ' + computerScore + '. Congratulations!');
    } else if (playerScore === computerScore) {
        alert('It\s a tie! You both had ' + playerScore + ' points. Congratulations!')
    } else {
        alert('Sorry! The computer had' + computerScore + ' points and you only had ' + playerScore + '. Better luck next time!')
    }
}
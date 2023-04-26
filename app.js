function getPlayerChoice () {

    const playerChoice = prompt("Pick your hand");
    return playerChoice;
}

// get player selection for further game


function getComputerChoice () {

    const gameOptions = ["Rock", "Paper", "Scissors"];

    return gameOptions[~~(Math.random() * gameOptions.length)];

}


// round of rock paper scissors game 

function playRound (playerSelection, computerSelection){
    
    if (computerSelection === playerSelection) {
        return "it's a tie!";
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return "you lose! Rock beats Scissors";
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        return "you win! Paper beats Rock";
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return "you lose! Paper beats Rock";
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        return "you win! Scissors beats Paper";
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        return "you win! Rock beats scissors";
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return "you lose! Scissors beats paper";
    }
}

let playerScore = 0;
let computerScore = 0;

function Game() {
   
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let gameRound = playRound(playerSelection, computerSelection);

    if (gameRound.includes("you win")) {
        playerScore = ++playerScore;
      } else {
        computerScore = ++computerScore;
      } return `player score is ${playerScore} and computer score is ${computerScore}`;
    }

function scoreMonitor () {
    for (let i = 0; i < 4; i++) {console.log(Game(i))
    }
}

console.log(scoreMonitor());

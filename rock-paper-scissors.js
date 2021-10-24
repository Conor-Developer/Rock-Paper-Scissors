function computerPlay() {
    randomCP = Math.floor(Math.random()*3) + 1;
    if (randomCP === 1) {
        return randomCP = "Rock";
    } else if (randomCP === 2) {
        return randomCP = "Paper";
    } else {
        return "Scissors";
    }    
}

function capitalize(string) {
    let firstw = string[0].toUpperCase();
    let secondw = string.substr(1);
    let thirdw = secondw.toLowerCase();
    return firstw + thirdw;
}


let computerScore = 0;
let playerScore = 0;


function playRound(computerSelection, playerSelection) {

    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computerScore++;
        return console.log("You Lose! Rock beats Scissors!"); 
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        computerScore++;
        return console.log("You Lose! Paper beats Rock!");
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        computerScore++;
        return console.log("You Lose! Scissors beats Paper!");
    
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerScore++;
        return console.log("You Win! Rock beats Scissors!");
 
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        playerScore++;
        return console.log("You Win! Paper beats Rock!");
 
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerScore++;
        return console.log("You Win! Scissors beats Paper!");

    } else
        return console.log("It's a draw!");
  
}

function game() {
    let userPrompt = prompt("Rock, Paper or Scissors?: ");
    const playerSelection1 = capitalize(userPrompt);
    const computerSelection1 = computerPlay();
    playRound(computerSelection1, playerSelection1);   
}


game();
console.log(`Computer Score: ${computerScore}`);
console.log(`Player Score: ${playerScore}`);
game();
console.log(`Computer Score: ${computerScore}`);
console.log(`Player Score: ${playerScore}`);
game();
console.log(`Computer Score: ${computerScore}`);
console.log(`Player Score: ${playerScore}`);
game();
console.log(`Computer Score: ${computerScore}`);
console.log(`Player Score: ${playerScore}`);
game();
console.log(`Computer Score: ${computerScore}`);
console.log(`Player Score: ${playerScore}`);


winner();

function winner() {
    if (playerScore === computerScore) {
        console.log("Its a draw!");
    } else if (playerScore > computerScore) {
        console.log("You win the game!");
    } else
        console.log("You lose the game!");

}
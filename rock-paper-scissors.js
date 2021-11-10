let computerScore = 0;
let playerScore = 0;

const container = document.querySelector("#container");
const score = document.createElement("p");
const pscore = document.createElement("p");
const container1 = document.querySelector("#container1");
const cscore = document.createElement("p");
const rpswinner = document.createElement("p");

cscore.textContent = `Computer Score: ${computerScore}`;
pscore.textContent = `Player Score: ${playerScore}`;
container.appendChild(pscore);
container.appendChild(cscore);

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

function playRound(computerSelection, playerSelection) {

    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        score.textContent = "You Lose! Rock beats Scissors!"; 
        container1.appendChild(score);
        computerScore++;
        
        
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        score.textContent = "You Lose! Paper beats Rock!";
        container1.appendChild(score);
        computerScore++;
        
     
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        score.textContent = "You Lose! Scissors beats Paper!";
        container1.appendChild(score);
        computerScore++;
       
        
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        score.textContent = "You Win! Rock beats Scissors!";
        container1.appendChild(score);
        playerScore++;
        
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        score.textContent = "You Win! Paper beats Rock!";
        container1.appendChild(score);
        playerScore++;

    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        score.textContent = "You Win! Scissors beats Paper!";
        container1.appendChild(score);
        playerScore++;

    } else {
        score.textContent = "It's a draw!";
        container1.appendChild(score); 
     
    }
    cscore.textContent = `Computer Score: ${computerScore}`;
    pscore.textContent = `Player Score: ${playerScore}`;
    container.appendChild(pscore);
    container.appendChild(cscore);
    determineWinner();
}

function playGame() {

    const btnr = document.querySelector("#btnr");
    btnr.addEventListener("click", () => {
        const computerSelection1 = computerPlay();
        playRound(computerSelection1, "Rock");

    });

    const btnp = document.querySelector("#btnp");
    btnp.addEventListener("click", () => {
        const computerSelection1 = computerPlay();
        playRound(computerSelection1, "Paper");
    
    });

    const btns = document.querySelector("#btns");
    btns.addEventListener("click", () => {
        const computerSelection1 = computerPlay();
        playRound(computerSelection1, "Scissors");

    });
}

function determineWinner() {

    if (computerScore === 5) {
        document.querySelector("#btnr").disabled = true;
        document.querySelector("#btnp").disabled = true;
        document.querySelector("#btns").disabled = true;
        const container2 = document.querySelector("#container2");
        rpswinner.textContent = "You lose!";
        container2.appendChild(rpswinner);

        const refreshButton = document.createElement("button");
        refreshButton.textContent = "Retry";
        container2.appendChild(refreshButton);
        refreshButton.classList.add("buttonsize");
    
        refreshButton.addEventListener("click", () => {
        location.reload();
        });

    } else if (playerScore === 5) {
        document.querySelector("#btnr").disabled = true;
        document.querySelector("#btnp").disabled = true;
        document.querySelector("#btns").disabled = true;
        const container2 = document.querySelector("#container2");
        rpswinner.textContent = "You win!";
        container2.appendChild(rpswinner);

        const refreshButton = document.createElement("button");
        refreshButton.textContent = "Retry";
        container2.appendChild(refreshButton);
        refreshButton.classList.add("buttonsize");
    
        refreshButton.addEventListener("click", () => {
        location.reload();
        });

    }
};

playGame();



    
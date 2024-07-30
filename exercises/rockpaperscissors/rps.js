let result = document.createElement("div");
let score = document.createElement("div");
let main = document.querySelector("main");
main.appendChild(result);
main.appendChild(score);

let computerScore = 0;
let humanScore = 0;

updateScore();

function checkWinner() {
    if (computerScore === 5) result.textContent = `The computer won`;
    if (humanScore === 5) result.textContent = `You win`;
}



function updateScore() {
    score.textContent = `${humanScore} - ${computerScore}`;
}

function getComputerChoice() {
    const VALUE = Math.floor(Math.random() * 3);
    if (VALUE === 0) {
        return "rock";
    } else if (VALUE === 1) {
        return "paper";
    } else if (VALUE === 2) {
        return "scissors";
    } else {
        return "Something went wrong";
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        /*console.log(`${humanChoice} ties ${computerChoice}`);*/
        result.textContent = `${humanChoice} ties ${computerChoice}`;
        return 0;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")) {
        /*console.log(`${humanChoice} beats ${computerChoice}, you win!`);*/
        result.textContent = `${humanChoice} beats ${computerChoice}, you win!`;
        humanScore++;
        updateScore();
        checkWinner();
        return 1;
    } else if ((humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "rock")) {
        /*console.log(`${humanChoice} loses to ${computerChoice}, you lose!`);*/
        result.textContent = `${humanChoice} loses to ${computerChoice}, you lose!`;
        computerScore++;
        updateScore();
        checkWinner();
        return 2;
    }
}




let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", event=> {
        playRound(event.target.value, getComputerChoice());
    })
})





// /*this is unnecessary now*/
// function getHumanChoice() {
//     const choice = prompt().toLowerCase();
//     if (["rock", "paper", "scissors"].includes(choice)) {
//         return choice;
//     } else {
//         return "invalid choice";
//     }
// }


// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     const rounds = 1;
//     for (let i=0; i < rounds; i++) {
//         const score = playRound(getHumanChoice(), getComputerChoice());
//         if (score === 1) {
//             humanScore++;
//         } else if (score === 2) {
//             computerScore++;
//         }
//     }
//     if (humanScore > computerScore) {
//         /*console.log(`you win by a score of ${humanScore} to ${computerScore}`);*/
//         result.textContent = `you win by a score of ${humanScore} to ${computerScore}`;
//     } else if (humanScore === computerScore) {
//         /*console.log(`you tie, the score was ${humanScore} to ${computerScore}`);*/
//         result.textContent = `you tie, the score was ${humanScore} to ${computerScore}`;
//     } else {
//         // console.log(`you lose by a score of ${humanScore} to ${computerScore}`);
//         result.textContent = `you lose by a score of ${humanScore} to ${computerScore}`;
//     }
// }
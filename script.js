function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const choice = Math.round(Math.random() * 10) % 3;
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection.toLowerCase()) {
        return "Tie game!"
    }
    if (playerSelection == "rock") {
        if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == "Scissors") {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection = "paper") {
        if (computerSelection == "Rock") {
            return "You Win, Paper beats Rock";
        } else if (computerSelection == "Scissors") {
            return "You Lose, Scissors beats Paper";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            return "You Lose, Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            return "You Win, Scissors beats Paper";
        }
    } else {
        alert("Invalid input");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What do you want to play? rock, paper or scissors?");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result.slice(0, 7) == "You Win") {
            playerScore++;
        } else if (result.slice(0, 8) == "You Lose") {
            computerScore++;
        }
        console.log(result);
    }
    console.log("Final result: Player ", playerScore, " Computer ", computerScore);
    if (playerScore > computerScore) {
        console.log("Player Win!");
    } else if (computerScore > playerScore) {
        console.log("Computer Win!");
    } else {
        console.log("It's a Tie!");
    }
}

game();
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    const choice = Math.round(Math.random() * 10) % 3;
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie game!"
    }
    if (playerSelection === 0) {
        if (computerSelection === 1) {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === 2) {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === 2) {
        if (computerSelection === 0) {
            return "You Lose, Rock beats Scissors";
        } else if (computerSelection === 1) {
            return "You Win, Scissors beats Paper";
        }
    } else if (playerSelection = 1) {
        if (computerSelection == 0) {
            return "You Win, Paper beats Rock";
        } else if (computerSelection == 2) {
            return "You Lose, Scissors beats Paper";
        }
    } else {
        alert("Invalid input");
    }
}

function play(_playerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        return;
    }
    document.getElementById("play_again_button").innerText = "Restart";
    playerSelectionIds = ["player_rock", "player_paper", "player_scissors"];
    computerSelectionIds = ["computer_rock", "computer_paper", "computer_scissors"];
    if (playerSelection != undefined) {
        document.getElementById(playerSelectionIds[playerSelection]).classList.remove("selected");
        document.getElementById(computerSelectionIds[computerSelection]).classList.remove("selected");
    }
    playerSelection = _playerSelection;
    computerSelection = getComputerChoice();
    document.getElementById(playerSelectionIds[playerSelection]).classList.add("selected");
    document.getElementById(computerSelectionIds[computerSelection]).classList.add("selected");

    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.slice(0, 7) == "You Win") {
        setScores(playerScore + 1, computerScore);
    } else if (result.slice(0, 8) == "You Lose") {
        setScores(playerScore, computerScore + 1);
    }
    setStatus(result);

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            setStatus("Player Win!");
        } else if (computerScore == 5) {
            setStatus("Computer Win!");
        }
        document.getElementById("play_again_button").innerText = "Play again";
    }
}

function setScores(_playerScore, _computerScore) {
    playerScore = _playerScore;
    computerScore = _computerScore;
    document.getElementById("player_score").innerText = _playerScore;
    document.getElementById("computer_score").innerText = _computerScore;
}

function setStatus(_status) {
    document.getElementById("status").innerText = _status;
}

function restart() {
    if (playerSelection != undefined) {
        document.getElementById(playerSelectionIds[playerSelection]).classList.remove("selected");
        document.getElementById(computerSelectionIds[computerSelection]).classList.remove("selected");
    }
    setScores(0, 0);
}

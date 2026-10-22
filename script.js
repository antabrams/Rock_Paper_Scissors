
// Initialize and declare scores
let humanScore = 0;
let computerScore = 0;

// Initialize and declare choices
let playerChoice = 0;
let computerChoice = 0;

function getHumanChoice() {
    // Prompt the user to enter a choice
    playerChoice = parseInt(prompt("Please enter your choice (Rock = 1, Paper = 2, Scissors = 3)"))

    // Checks if choice is a number between 1-3
    if (playerChoice < 0 || playerChoice > 3) {
        alert("Choice must be a number between 1-3")
        playerChoice = parseInt(prompt("Please enter your choice (Rock = 1, Paper = 2, Scissors = 3)"))
    }
    // Checks if choice is a number and not nothing
    if (Number.isNaN(playerChoice) || !userInput || userInput.trim() === "") {
        alert("Choice must be a number between 1-3")
    }
}
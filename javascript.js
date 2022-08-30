let computerChoice;
getComputerChoice();

function getComputerChoice() {
    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    if (computerChoiceNum === 1) {
        computerChoice = 'Rock';
    } else if (computerChoiceNum === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
}

let playerChoiceAuto = Math.floor(Math.random() * 3) + 1;
let playerSelection;
playerSelectionConvert();

function playerSelectionConvert() {
    if (playerChoiceAuto === 1) {
        playerSelection = 'Rock';
    } else if (playerChoiceAuto === 2) {
        playerSelection = 'Paper';
    } else {
        playerSelection = 'Scissors';
    }
}

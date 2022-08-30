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
let playerChoice;
playerSelectionConvert();

function playerSelectionConvert() {
    if (playerChoiceAuto === 1) {
        playerChoice = 'Rock';
    } else if (playerChoiceAuto === 2) {
        playerChoice = 'Paper';
    } else {
        playerChoice = 'Scissors';
    }
}

let result;
result = playRound(computerChoice, playerChoice);

function playRound(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return 'It\s a tie! You and the computer both picked ' + playerChoice + '!';
    
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        return 'Computer Wins! Computer\'s paper covered your rock.';
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        return 'You Win! Your rock smashed computer\'s scissors.';
    
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        return 'You Win! Your paper covered computer\'s rock.';
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        return 'Computer Wins! Computer\'s scissors cut up your paper.';
    
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        return 'Computer Wins! Computer\'s rock smashed your scissors.';
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        return 'You Win! Your scissors cut up computer\'s paper.';
    
    } else {
        return 'Something messed up.';
    }
}



console.log('You chose ' + playerChoice);
console.log('Computer chose ' + computerChoice);

console.log(result);

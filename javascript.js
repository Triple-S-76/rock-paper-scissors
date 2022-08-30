let computerChoice;
getComputerChoice();

// getComputerChoice() gets a random number (1, 2, 3) then converts it to Rock, Paper or Scissors
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

// playerChoiceAuto gets a random number (1, 2, 3)
let playerChoiceAuto = Math.floor(Math.random() * 3) + 1;

let playerChoice;

// Changes playerChoiceAuto to Rock, Paper or Scissors & assigns to playerChoice
playerSelectionConvert();

// playerSelectionConvert() converts 1, 2 or 3 to Rock, Paper or Scissors
function playerSelectionConvert() {
    if (playerChoiceAuto === 1) {
        playerChoice = 'Rock';
    } else if (playerChoiceAuto === 2) {
        playerChoice = 'Paper';
    } else {
        playerChoice = 'Scissors';
    }
}

// Plays 1 round and gets the results in result
let result;
result = playRound(computerChoice, playerChoice);

// playRound() plays 1 round and returns the results
function playRound(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {

        // If tie
        return 'It\s a tie! You and the computer both picked ' + playerChoice + '!';
    
        // Player chooses Rock
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        return 'Computer Wins! Computer\'s paper covered your rock.';
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        return 'You Win! Your rock smashed computer\'s scissors.';
    
        // Player chooses Paper
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        return 'You Win! Your paper covered computer\'s rock.';
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        return 'Computer Wins! Computer\'s scissors cut up your paper.';
    
        // Player chooses Scissors
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        return 'Computer Wins! Computer\'s rock smashed your scissors.';
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        return 'You Win! Your scissors cut up computer\'s paper.';
    
        // This should never run
    } else {
        return 'Something messed up.';
    }
}


// Player and computer choices logged to the console
console.log('You chose ' + playerChoice);
console.log('Computer chose ' + computerChoice);

// Result logged to the console
console.log(result);

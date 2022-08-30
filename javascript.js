// Choose number of games to play here
let numOfGames = 5;

let playerScore = 0;
let computerScore = 0;

let computerChoice;

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

let playerChoice;
let playerChoiceAutoNumber;

// playerChoiceAuto() gets a random number (1, 2, 3) for the player
function playerChoiceAuto() {
    playerChoiceAutoNumber = Math.floor(Math.random() * 3) + 1;
}    

// playerSelectionConvert() converts 1, 2 or 3 to Rock, Paper or Scissors
function playerSelectionConvert() {
    if (playerChoiceAutoNumber === 1) {
        playerChoice = 'Rock';
    } else if (playerChoiceAutoNumber === 2) {
        playerChoice = 'Paper';
    } else {
        playerChoice = 'Scissors';
    }
}

let result;

// playRound() plays 1 round, adds 1 to the winner's score and returns the results
function playRound(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {

        // If tie
        return 'It\s a tie! You and the computer both picked ' + playerChoice + '!';
    
        // Player chooses Rock
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        computerScore++;
        return 'Computer Wins! Computer\'s paper covered your rock.';
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        playerScore++;
        return 'You Win! Your rock smashed computer\'s scissors.';
    
        // Player chooses Paper
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        playerScore++;
        return 'You Win! Your paper covered computer\'s rock.';
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        computerScore++;
        return 'Computer Wins! Computer\'s scissors cut up your paper.';
    
        // Player chooses Scissors
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        computerScore++;
        return 'Computer Wins! Computer\'s rock smashed your scissors.';
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        playerScore++;
        return 'You Win! Your scissors cut up computer\'s paper.';
    
        // This should never run
    } else {
        return 'Something messed up.';
    }
}

game(numOfGames);

// Plays multiple games & keeps score, then displays result
function game(num) {
    for (let i = 0; i < num; i++) {
        getComputerChoice();
        playerChoiceAuto();
        playerSelectionConvert();
        result = playRound(computerChoice, playerChoice);
        console.log(result);
    }

    // Display both scores to the console
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);

    // Display final result in the console
    if (playerScore === computerScore) {
        console.log('It\'s a Tie! ' + playerScore + ' to ' + computerScore);
    } else if (playerScore < computerScore) {
        console.log('Computer Wins ' + computerScore + ' to ' + playerScore);
    } else {
        console.log('You Won ' + playerScore + ' to ' + computerScore);
    }
}

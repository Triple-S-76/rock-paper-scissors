
let numOfGamesChoice = document.getElementById('games-amount-num');
numOfGamesChoice.addEventListener('input', setNumberOfGames);

function setNumberOfGames(event) {
    numOfGames = event.target.value;
}

let numOfGames = numOfGamesChoice.value;

let playerScore = 0;
let computerScore = 0;

let result;

let scoreboardPlayer = document.getElementById('score-player');
let scoreboardComputer = document.getElementById('score-computer');

let computerChoice;
let playerChoice;

let gameResults = document.getElementById('game-results');

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
};

// playerChoiceAuto() gets a random number (1, 2, 3) then converts it to Rock, Paper or Scissors
function playerChoiceAuto() {
    let playerChoiceAutoNumber = Math.floor(Math.random() * 3) + 1;
    if (playerChoiceAutoNumber === 1) {
        playerChoice = 'Rock';
    } else if (playerChoiceAutoNumber === 2) {
        playerChoice = 'Paper';
    } else {
        playerChoice = 'Scissors';
    }
}    

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
};

let playButton = document.getElementById('play-btn');
playButton.addEventListener('click', gameAuto);

let buttonHTML = document.getElementsByClassName('player-choice');
let buttons = Array.from(buttonHTML);
buttons.forEach(element => element.addEventListener('click', playGame));

// Plays automatic games & keeps score, then displays result
function gameAuto() {

    let playerCanPlay = numOfGames > playerScore;
    let computerCanPlay = numOfGames > computerScore;

    if (playerCanPlay == false || computerCanPlay == false) {
        return
    }

    for (;playerScore < numOfGames && computerScore < numOfGames;) {
        getComputerChoice();
        playerChoiceAuto();
        result = playRound(computerChoice, playerChoice);
        updateScoreboard();
    }
};

function playGame(event) {

    let playerCanPlay = numOfGames > playerScore;
    let computerCanPlay = numOfGames > computerScore;

    if (playerCanPlay == false || computerCanPlay == false) {
        return
    }

    playerChoice = event.target.innerText;
    getComputerChoice();
    result = playRound(computerChoice, playerChoice);
    updateScoreboard();
}

let gameHistory = document.getElementById('game-history');
let totalGamesPlayed = 1;
let scoreboardTotalGames = document.getElementById('total-games-played');


function updateScoreboard() {
    let history = document.getElementById('game-history');
    let newLine = document.createElement('li');
    newLine.textContent = 'Game Number: ' + totalGamesPlayed + ' - ' + result;
    history.prepend(newLine);
    totalGamesPlayed += 1;
    scoreboardPlayer.textContent = playerScore;
    scoreboardComputer.textContent = computerScore;
    gameResults.textContent = result;
    scoreboardTotalGames.textContent = 'Total games played: ' + (totalGamesPlayed - 1);
}

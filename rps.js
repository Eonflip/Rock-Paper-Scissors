let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;


const body = document.querySelector('body');

const rock = document.createElement('button');

rock.classList.add('1');

rock.textContent = 'Rock';

body.appendChild(rock);

const paper = document.createElement('button');

paper.classList.add('2');

paper.textContent = 'Paper';

body.appendChild(paper);

const scissors = document.createElement('button');

scissors.classList.add('3');

scissors.textContent = 'Scissors';

body.appendChild(scissors);

const resultsDisplay = document.createElement('div');

resultsDisplay.classList.add('results');

const results = document.createElement('p');

body.appendChild(resultsDisplay);

const winCondition = () => {
    if (playerScore == 5){
        const resultsPrint = document.createElement('div');
        resultsPrint.classList.add('print');
        resultsPrint.textContent = "You win, congratulations. The machines can't take over while you're around!";
        body.appendChild(resultsPrint);
    } else if (computerScore == 5){
        const resultsPrint = document.createElement('div');
        resultsPrint.classList.add('print');
        resultsPrint.textContent = "You lose, oh no the machine uprising has begun!";
        body.appendChild(resultsPrint);
    }
}




rock.addEventListener('click', () => {
    playerSelection = 'ROCK';
    gamePlay(playerSelection, computerSelection);
    if (playerScore == 3) {
        console.log("You win, congratulations. The machines can't take over while you're around!");
    } else if (computerScore == 3) {
        console.log("You lose, oh no the machine uprising has begun!");
    }
    winCondition();
    return;
});

paper.addEventListener('click', () => {
    let playerScore = 0;
    playerSelection = 'PAPER';
    gamePlay(playerSelection, computerSelection);
    if (playerScore == 3) {
        console.log("You win, congratulations. The machines can't take over while you're around!");
    } else if (computerScore == 3) {
        console.log("You lose, oh no the machine uprising has begun!");
    }
    winCondition();
    return;
});

scissors.addEventListener('click', () => {
    let playerScore = 0;
    playerSelection = 'SCISSORS';
    gamePlay(playerSelection, computerSelection);
    if (playerScore == 3) {
        console.log("You win, congratulations. The machines can't take over while you're around!");
    } else if (computerScore == 3) {
        console.log("You lose, oh no the machine uprising has begun!");
    }
    winCondition();
    return;
});

console.log(playerSelection);

const computerPlay = () => {
    choice = Math.random() * 100;

    if (choice >= 67) {
        return "Rock";
    } 
    else if (choice < 67 && choice >= 33) {
        return "Scissors";
    }
    else  {
        return "Paper";
    }
};

const gamePlay = (playerSelection, computerSelection) => {

        computerSelection = computerPlay().toUpperCase();

        if (playerSelection == computerSelection){
                const drawPrint = document.createElement('div');
                drawPrint.classList.add('drawPrint');
                drawPrint.textContent = "It's a draw try again!";
                body.appendChild(drawPrint);
        } else if (playerSelection == "ROCK"){
            if (computerSelection == "SCISSORS"){
                const winPrint = document.createElement('div');
                winPrint.classList.add('winPrint');
                winPrint.textContent = "Rock beats scissors, you win!";
                body.appendChild(winPrint);
                playerScore++;
            } else {
                const losePrint = document.createElement('div');
                losePrint.classList.add('losePrint');
                losePrint.textContent = "Paper beats rock, you lose!";
                body.appendChild(losePrint);
                computerScore++;
            }
        } else if (playerSelection == "SCISSORS"){
            if (computerSelection == "PAPER"){
                const winPrint = document.createElement('div');
                winPrint.classList.add('winPrint');
                winPrint.textContent = "Scissors beats paper, you win!";
                body.appendChild(winPrint);
                playerScore++;
            } else {
                const losePrint = document.createElement('div');
                losePrint.classList.add('losePrint');
                losePrint.textContent = "Rock beats scissors, you lose!";
                body.appendChild(losePrint);
                computerScore++;
            }
        } else if (playerSelection == "PAPER"){
            if (computerSelection ==  "ROCK"){
                const winPrint = document.createElement('div');
                winPrint.classList.add('winPrint');
                winPrint.textContent = "Paper beats rock, you win!";
                body.appendChild(winPrint);
                playerScore++;
            } else{
                const losePrint = document.createElement('div');
                losePrint.classList.add('losePrint');
                losePrint.textContent = "Scissors beats paper, you lose!";
                body.appendChild(losePrint);
                computerScore++;
            }

        }

        results.innerHTML = `Your score is ${playerScore} the computer's score is ${computerScore}`;

        resultsDisplay.appendChild(results);
    };

    if (playerScore == 3) {
        console.log("You win, congratulations. The machines can't take over while you're around!");
    } else if (computerScore == 3) {
        console.log("You lose, oh no the machine uprising has begun!");
    }



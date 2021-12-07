let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;


function computerPlay(){
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
}


function gamePlay(playerSelection, computerSelection){

        playerSelection = prompt("Select Rock, Paper, or Scissors").toUpperCase();

        computerSelection = computerPlay().toUpperCase();

        if (playerSelection == computerSelection){
            console.log("Its a draw!");
        }
        else if (playerSelection == "ROCK"){
            if (computerSelection == "SCISSORS"){
                console.log("Rock beats scissors, you win!");
                playerScore++;
            }
            else {
                console.log("Paper beats rock, you lose.");
                computerScore++;
            }
        }
        else if (playerSelection == "SCISSORS"){
            if (computerSelection == "PAPER"){
                console.log("Scissors beats paper, you win!");
                playerScore++;
            }
            else {
                console.log("Rock beats scissors, you lose.");
                computerScore++;
            }
        }
        else if (playerSelection == "PAPER"){
            if (computerSelection ==  "ROCK"){
                console.log("Paper beats rock, you win!");
                playerScore++;
            }
            else{
                console.log("Scissors beats paper, you lose.");
                computerScore++;
            }

        }
    }


function game() {
    while (playerScore < 3 && computerScore < 3) {
        gamePlay(playerSelection, computerSelection);
    } if (playerScore === 2) {
        console.log("Congratulations, you win!");
    } else if (computerScore === 2) {
        console.log("Wow you got beat by a computer, embarrassing");
    }
}

game();

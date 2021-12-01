let userSelect = prompt("Please choose rock, paper or scissors: ");

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

function gameTime(playerSelection, computerSelection){

    let playerCorrect = playerSelection.toUpperCase();
    let computerCorrect = computerSelection.toUpperCase();

        if (playerCorrect === computerCorrect){
            return "Its a draw!";
        }
        else if (playerCorrect == "ROCK"){
            if (computerCorrect == "SCISSORS"){
                return "Rock beats scissors, you win!"
                playerScore++;
                moves++;
            }
            else{
                return "Paper beats rock, you lose."
                computerScore++;
                moves++;
            }
        }
        else if (playerCorrect == "SCISSORS"){
            if (computerCorrect == "PAPER"){
                return "Scissors beats paper, you win!"
                playerScore++;
                moves++;
            }
            else {
                return "Rock beats scissors, you lose."
                computerScore++;
                moves++;
            }
        }
        else if (playerCorrect == "PAPER"){
            if (computerCorrect ==  "ROCK"){
                return "Paper beats rock, you win!"
                playerScore++;
                moves++;
            }
            else{
                return "Scissors beats paper, you lose."
                computerScore++;
                moves++;
            }
        }
    }

        
    function game(){
        let playerScore = 0;
        let computerScore = 0;
        let moves = 0;
    }
function getComputerChoice() {
        selectNumber = Math.floor(Math.random() * 100);
        console.log(selectNumber);
        if (selectNumber >= 1 && selectNumber <= 33){
            let computerSelection = "Rock";
            return computerSelection;
        } else if (selectNumber >= 34 && selectNumber <= 66) {
            let computerSelection = "Paper";
            return computerSelection;

        } else {
            let computerSelection = "Scissors";
            return computerSelection;
        }
        
    }
function getPlayerChoice(){
   return playerSelection = prompt("Enter your choice");
}
function oneRound(playerSelection , computerSelection){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return result = "Rock beats Scissors. You win.";
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            return result = "Paper beats Rock. You win."; 
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            return result = "Scissors beats paper. You win.";
        } else if (playerSelection == "Rock" && computerSelection == "Paper"){
            return result = "Paper beats rock. You lose.";
        } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
            return result = "Scissors beats paper. You lose.";
        } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
            return result = "Rock beats Scissors. You lose.";
        } else if (playerSelection == computerSelection){
            return result = "You tie";
        }
}
console.log(oneRound());
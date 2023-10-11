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
function playerChoice(){
   return playerSelection = prompt("Enter your choice");
}
/*function oneRound(playerSelection , computerSelection){
    let playerSelection = prompt("Enter your choice.")
    let computerSelection = getComputerChoice();
    if (playerSelection =="Rock" && computerSelection == "Paper"){
        return results = "Paper beats rock. You lose";

    }
}*/
console.log(getComputerChoice());
console.log(playerChoice());
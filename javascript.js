function getComputerChoice() {
        selectNumber = Math.floor(Math.random() * 100);
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
        console.log("Rock beats Scissors. You win.");
        return result = 1; 
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            console.log("Paper beats Rock. You win.");
            return result = 1;  
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            console.log("Scissors beats paper. You win.");
            return result = 1;
        } else if (playerSelection == "Rock" && computerSelection == "Paper"){
            console.log("Paper beats rock. You lose.");
            return result = -1; 
        } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
            console.log("Scissors beats paper. You lose.");
            return result = -1; 
        } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
            console.log("Rock beats Scissors. You lose.");
            return result = -1; 
        } else if (playerSelection == computerSelection){
            console.log("You tie");
            return result = 0;
        }
}
function game(){
    let win = 0
    let lose = 0
    oneRound();
    if(result == 1){
        console.log("Win Test");
        win++;
    } else if( result == -1){
        console.log("lose test");
        lose--;
    }
    console.log(win);
    oneRound();
    if(result == 1){
        console.log("Win Test");
        win++;
    } else if( result == -1){
        console.log("lose test");
        lose--;
    }
    console.log(win);
    oneRound();
    if(result == 1){
        console.log("Win Test");
        win++;
    } else if( result == -1){
        console.log("lose test");
        lose--;
    }
    console.log(win);
    oneRound();
    if(result == 1){
        console.log("Win Test");
        win++;
    } else if( result == -1){
        console.log("lose test");
        lose--;
    }
    console.log(win);
    oneRound();
    if(result == 1){
        console.log("Win Test");
        win++;
    } else if( result == -1){
        console.log("lose test");
        lose--;
    }
    console.log(win);
    if(win > lose){
        console.log("You won the round!");

    } else if( win < lose) {
        console.log("You lost the round");
    } else{
        console.log("You tied the computer");
    }
}
game();
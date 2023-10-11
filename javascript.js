    function getComputerChoice() {
        selectNumber = Math.floor(Math.random() * 100);
        console.log(selectNumber);
        if (selectNumber >= 1 && selectNumber <= 33){
            computerSelection = "Rock";
            return computerSelection;
        } else if (selectNumber >= 34 && selectNumber <= 66) {
            computerSelection = "Paper";
            return computerSelection;

        } else {
            computerSelection = "Scissors";
            return computerSelection;
        }
        
    }
    console.log(getComputerChoice());

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3 );
    if (choice===0){
        return "paper";
    }
    else if (choice===1){
        return "rock";
    }
    else {
        return "scissor";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Rock or Paper or Scissor");
    return choice ;
}



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice===computerChoice) {
        console.log("It's a tie");
    }
    else if (humanChoice==="paper" && computerChoice==="scissor" ){
        console.log("You lose! Scissor beats Paper");
        return 0;
    }
    else if (humanChoice==="rock" && computerChoice==="paper" ){
        console.log("You lose! Paper beats Rock");
        return 0;
    }
    else if (humanChoice==="scissor" && computerChoice==="rock" ){
        console.log("You lose! Rock beats Scissor");
        return 0;
    }
    else if (humanChoice==="scissor" && computerChoice==="paper" ){
        console.log("You Win! Scissor beats Paper");
        return 1;
    }
    else if (humanChoice==="paper" && computerChoice==="rock" ){
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    else if (humanChoice==="rock" && computerChoice==="scissor" ){
        console.log("You Win! Rock beats Scissor");
        return 1;
    }
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i=0; i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        if (playRound===1){
            ++humanScore;
        }  
        else if (playRound===0) {++computerScore};
    }
    if (humanScore>computerScore){
        console.log("you are the Winner YAY!!!")
    }
    else if (humanScore===computerScore){
        console.log("It's a tie haha")
    }
    else {console.log("you are the Loser BOO!!!")}
}

playGame()
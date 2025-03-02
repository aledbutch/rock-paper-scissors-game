function getComputerChoice (){
   
    let computerChoice = Math.random()

    if (computerChoice > 0 && computerChoice <= 1/3 ){
        return "rock"  
    } else if (computerChoice > 1/3 && computerChoice <= 2/3 ){
        return "paper"
    } else if (computerChoice > 2/3){
        return "scissors"}
    }
   
function getHumanChoice (){
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase()
    if(choice == "rock"){
        return "rock"
    }else if (choice == "paper"){
        return "paper"
    }else if (choice == "scissors"){
        return "scissors"
    }else {return "invalid input"}
}
    
  
let humanScore = 0 
let computerScore = 0 

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return "You lose! Paper beats rock.\nComputer: " + computerScore;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "You win! Rock beats scissors.\nHuman: " + humanScore;
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        return "Draw! Try again";
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper.\nComputer: " + computerScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You win! Paper beats rock.\nHuman: " + humanScore;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        return "Draw! Try again";
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.\nComputer: " + computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You win! Scissors beats paper.\nHuman: " + humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "Draw! Try again";
    }       
}

const humanSelection = getHumanChoice();

// Check for invalid input and stop the game if necessary
if (humanSelection === "invalid input") {
    console.log("Invalid choice! Please refresh and enter rock, paper, or scissors.");
} else {
    // Get the computer's choice
    const computerSelection = getComputerChoice();
    
    // Display choices
    console.log(`You chose: ${humanSelection}, Computer chose: ${computerSelection}`);
    
    // Play the round and display result
    console.log(playRound(humanSelection, computerSelection));
    
    // Display current scores
    console.log(`Current Score: Human - ${humanScore}, Computer - ${computerScore}`);


    let playAgain = confirm("Do you want to play again?");
if (playAgain) {
    location.reload(); // Reloads the page to restart the game
}
}
    
    
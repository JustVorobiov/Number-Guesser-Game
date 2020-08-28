let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generate secret number which should be guessed
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}
     
// comparing computer guess and user guess

const compareGuesses = (userGuess, computerGuess, target) => {
   
    if(userGuess === computerGuess){
        return true;
    } else if(Math.abs(userGuess-target) < Math.abs(computerGuess - target)) {
        return true;
    } else{
        return false;
    }
}

//updating score 
const updateScore = winner => {
    
    if(winner ==='human'){
        humanScore++;
    } else {
        computerScore++;
    }
}

//round counter
const advanceRound = () => currentRoundNumber++; 
 

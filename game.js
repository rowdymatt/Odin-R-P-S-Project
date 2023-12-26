console.log("game.js is working!");
//RNG for Computer's Choice
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//Gets Computer's choice by calling RNG function
function getComputerChoice() {
  let randNum = getRandomInt(3);
  let comChoice = -1;

  switch(randNum) {
    case 0:
      comChoice = "rock";
      break;
    case 1:
      comChoice = "paper";
      break;
    case 2:
      comChoice = "scissors";
      break;
  }

  return comChoice;
}
//Gets the player's choice, converts toLower to prevent case sensitive errors, and performs basic input checking
function getPlayerChoice() {
  let playerInput = prompt("Welcome to Rock, Paper, Scissors!\nThis is a best of 5 game. (First to 3)\nWhat will you play?")
  playerInput = playerInput.toLowerCase();
  
  
  while(playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
    playerInput = prompt("Invalid selection. Please enter \"rock\", \"paper\", or \"scissors\".")
    playerInput = playerInput.toLowerCase();
  }
  console.log("You Chose: " + playerInput);

  return playerInput;
}
//Compares the player's choice to the computer's choice and returns the winner as a string
function playRound(playerSelection, computerSelection) {
  
  let result = 0;

  switch(playerSelection) {
    
    case "rock":
      switch(computerSelection) {
        case "rock":
          result = "The Computer chose rock: TIE GAME!";
          return result;
        case "paper":
          result = "The Computer chose Paper: YOU LOSE!";
          return result;
        case "scissors":
          result = "The Computer chose Scissors: YOU WIN!";
          return result;
      }
  
    case "paper":
      switch(computerSelection) {
        case "rock":
          result = "The Computer chose rock: YOU WIN!";
          return result;
        case "paper":
          result = "The Computer chose Paper: TIE GAME!";
          return result;
        case "scissors":
          result = "The Computer chose Scissors: YOU LOSE!";
          return result;
      }

    case "scissors":
      switch(computerSelection) {
        case "rock":
          result = "The Computer chose rock: YOU LOSE!";
          return result;
        case "paper":
          result = "The Computer chose Paper: YOU WIN!";
          return result;
        case "scissors":
          result = "The Computer chose Scissors: TIE GAME!";
          return result;
      }
  }
}
//runs the game and calls every other function. Basically a "main"
function game() {
  let computerSelection;
  let playerSelection;
  let roundPlayed;

  let winChecker;

  let playerWins = 0;
  let comWins = 0;

  while(playerWins < 3 && comWins < 3) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    roundPlayed = playRound(playerSelection, computerSelection);

    console.log(roundPlayed);

    alert(roundPlayed);

    //This block checks the winner by checcking the 3rd to last character in the result strings, then increments whoever won unless it's a tie.
    let strLen = roundPlayed.length;
    strLen -= 3;
    winChecker = roundPlayed[strLen];
    switch(winChecker){
      case 'I':
        playerWins += 1;
        break;
      case 'S':
        comWins += 1;
        break;
      case 'M':
        ;
    }

    console.log("Your Wins: " + playerWins);
    console.log("Computer's Wins: " + comWins);
    alert("Your Wins: " + playerWins + "\nComputer's Wins: " + comWins);
  }
//win messages
  if(playerWins === 3) {
    console.log("YOU WIN THE GAME!");
    alert("YOU WIN THE GAME!");
  }
  else {
    console.log("THE COMPUTER WINS THE GAME!");
    alert("THE COMPUTER WINS THE GAME!");
  }
}
//Starts the game
game();  
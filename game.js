console.log("game.js is working!");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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
  //for debugging
  if(comChoice === -1) {
    console.log("randNum is TROLLING bro!");
  }

  return comChoice;
}

function getPlayerChoice() {
  let playerInput = prompt("Welcome to Rock, Paper, Scissors!\nThis is a best of 5 game. (First to 3)\nWhat will you play?")
  console.log(playerInput);
  playerInput = playerInput.toLowerCase();
  console.log(playerInput);
  
  while(playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
    playerInput = prompt("Invalid selection. Please enter \"rock\", \"paper\", or \"scissors\".")
    console.log(playerInput);
    playerInput = playerInput.toLowerCase();
  }
  return playerInput;
}

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

    console.log(roundPlayed);//debugging

    alert(roundPlayed)

    let strLen = roundPlayed.length;
    strLen -= 3;
    winChecker = roundPlayed[strLen]
    switch(winChecker){
      case 'I':
        playerWins += 1
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

  if(playerWins === 3) {
    console.log("YOU WIN THE GAME!");
    alert("YOU WIN THE GAME!");
  }
  else {
    console.log("THE COMPUTER WINS THE GAME!");
    alert("THE COMPUTER WINS THE GAME!");
  }
}
  
game();  
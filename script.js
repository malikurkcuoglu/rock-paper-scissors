const buttons = document.querySelectorAll(".buttons");
const humanScoreDiv = document.querySelector(".human-score");
const computerScoreDiv = document.querySelector(".computer-score");
let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    humanChoice = e.target.getAttribute("id");
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log(humanChoice);
  })
);

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
};

let playRound = (humanChoice, computerChoice) => {
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      isTie = false;
      humanScore++;
      console.log("You win! Paper beats rock");
    } else if (computerChoice === "scissors") {
      isTie = false;
      computerScore++;
      console.log("You lose! Scissors beats paper");
    } else {
      console.log("Tie");
      isTie = true;
    }
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      isTie = false;
      humanScore++;
      console.log("You win! Rock beats scissors");
    } else if (computerChoice === "paper") {
      isTie = false;
      computerScore++;
      console.log("You lose! Paper beats rock");
    } else {
      isTie = true;
      console.log("Tie");
    }
  } else {
    if (computerChoice === "paper") {
      isTie = false;
      humanScore++;
      console.log("You win! Scissors beats paper");
    } else if (computerChoice === "rock") {
      isTie = false;
      computerScore++;
      console.log("You lose! Rock beats Scissors");
    } else {
      isTie = true;
      console.log("Tie");
    }
  }
};

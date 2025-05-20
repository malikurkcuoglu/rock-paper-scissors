const buttons = document.querySelectorAll(".buttons");
const humanScoreDiv = document.querySelector(".human-score");
const computerScoreDiv = document.querySelector(".computer-score");
const info = document.querySelector(".info");

let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (humanScore === 0 && computerScore === 0) {
      info.textContent = "";
    }
    humanChoice = e.target.getAttribute("id");
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if (humanScore === 5 || computerScore === 5) {
      info.textContent =
        humanScore === 5
          ? `Game over! You win! Your score : ${humanScore} Computer score : ${computerScore}`
          : `Game over! You lose! Your score : ${humanScore} Computer score : ${computerScore}`;
      humanScore = 0;
      computerScore = 0;
    }
    console.log(humanChoice);
    console.log(computerChoice);
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
      humanScore++;
      info.textContent = "Computer chose rock. You win";
    } else if (computerChoice === "scissors") {
      computerScore++;
      info.textContent = "Computer chose scissors. You lose";
    } else {
      info.textContent = "Computer chose paper too. Tie";
    }
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      info.textContent = "Computer chose scissors. You win";
    } else if (computerChoice === "paper") {
      computerScore++;
      info.textContent = "Computer chose paper. You lose";
    } else {
      info.textContent = "Computer chose rock too. Tie";
    }
  } else {
    if (computerChoice === "paper") {
      humanScore++;
      info.textContent = "Computer chose paper. You win";
    } else if (computerChoice === "rock") {
      computerScore++;
      info.textContent = "Computer chose rock. You lose";
    } else {
      info.textContent = "Computer chose scissors too. Tie";
    }
  }
  humanScoreDiv.textContent = `You : ${humanScore}`;
  computerScoreDiv.textContent = `Computer : ${computerScore}`;
};

let getComputerChoice = () => {
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

let getHumanChoice = () => {
  let humanChoice = prompt("Enter your choice").toLowerCase();
  return humanChoice;
};

let playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  let isTie = false;
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
  let humanSelection;
  let computerSelection;
  let i = 1;
  while (i <= 5) {
    if (humanScore === 3 || computerScore === 3) break;
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (isTie) continue;
    else i++;
  }

  if (humanScore > computerScore) {
    console.log(
      `You win! Your score : ${humanScore} Computer score : ${computerScore}`
    );
  } else {
    console.log(
      `You lose! Your score : ${humanScore} Computer score : ${computerScore}`
    );
  }
};

playGame();

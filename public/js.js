"use strict";
// function will return randomly rock,paper,scissor
const NUM_OF_TRIES = 5;
let usersScore = 0;
let computerScore = 0;
// const backdrop = document.querySelector("[data-backdrop]");
// const modal = document.querySelector("[data-modal]");
// const modalBtn = document.querySelector("[data-modal-btn]");
// const form = document.querySelector("[form]");
// const input = document.querySelector("#userInput");

// backdrop.addEventListener("click", () => {
//   backdrop.style.display = "none";
//   modal.style.display = "none";
// });
// modalBtn.addEventListener("click", () => {
//   backdrop.style.display = "none";
//   modal.style.display = "none";
// });

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  let computerChoose = "";
  computerChoose =
    computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";
  console.log(computerChoose);
  return computerChoose;
};

const playRound = (playerSelection, computerSelection) => {
  const playerSelectionCaseIns = playerSelection.toLowerCase();
  const computerSelectionCaseIns = computerSelection.toLowerCase();

  if (
    (playerSelectionCaseIns === "rock" &&
      computerSelectionCaseIns === "scissors") ||
    (playerSelectionCaseIns === "scissors" &&
      computerSelectionCaseIns === "paper") ||
    (playerSelectionCaseIns === "paper" && computerSelectionCaseIns === "rock")
  ) {
    return `You Win! ${playerSelectionCaseIns} beats ${computerSelectionCaseIns} user entered ${playerSelectionCaseIns} and computer entered ${computerSelectionCaseIns}`;
  }
  // if (
  //   playerSelectionCaseIns === "scissors" &&
  //   computerSelectionCaseIns === "paper"
  // ) {
  //   return `You Win! ${playerSelectionCaseIns} beats ${computerSelectionCaseIns} user entered ${playerSelectionCaseIns} and computer entered ${computerSelectionCaseIns}`;
  // }
  // if (
  //   playerSelectionCaseIns === "paper" &&
  //   computerSelectionCaseIns === "rock"
  // ) {
  //   return `You Win! ${playerSelectionCaseIns} beats ${computerSelectionCaseIns} user entered ${playerSelectionCaseIns} and computer entered ${computerSelectionCaseIns}`;
  // }
  if (playerSelectionCaseIns === computerSelectionCaseIns) {
    return `TIE`;
  } else {
    return `You lose! computer ${computerSelectionCaseIns} beats (player) ${playerSelectionCaseIns} user entered ${playerSelectionCaseIns} and computer entered ${computerSelectionCaseIns}`;
  }
};

const game = () => {
  for (let count = 0; count < NUM_OF_TRIES; count++) {
    const userInput = prompt(
      "Make your choice. rock, paper or scissors \nby default rock is picked if you failed to pick anything",
      "rock"
    ).toLowerCase();
    // console.log(userInput);
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      const result = playRound(userInput, getComputerChoice());
      if (result.startsWith("You Win!")) {
        usersScore++;
        console.log(result);
      }
      if (result.startsWith("You lose!")) {
        computerScore++;
        console.log(result);
      }
      if (result.startsWith("TIE")) {
        computerScore++;
        usersScore++;
        console.log(result);
      }
    } else {
      count--;
      continue;
    }
  }

  return usersScore === computerScore
    ? "TIE"
    : usersScore > computerScore
    ? "You WON!!"
    : "You LOSE";
};

// game();
alert(
  `${game()} \n YOUR SCORE: ${usersScore} Computer's Score : ${computerScore}`
);

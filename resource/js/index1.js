// Function getComputerChoice()
const getComputerChoice = () => {
  // define computerChoice: generate a random  number between 1 and 3 inclusive
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  // if(computerChoice == 1) then
  //     return "rock"s
  // else if(computerChoice == 2) then
  //     return "paper"
  // else then
  //     return "scissor"

  return computerChoice === 1
    ? "rock"
    : computerChoice === 2
    ? "paper"
    : "scissor";
  // end if
};
// End Function

// Function  getHumanChoice
const getHumanChoice = (ev) => {
  // fetching user input and adding event to it
  const playerChoice = ev?.target?.closest("button")?.dataset.playerChoice;
  if (!playerChoice) {
    return;
  }
  return playerChoice;
};

const showModel = (model) => {
  overlay.classList.add("show");
  model.classList.add("show");
};
// End Function

// Function playRound(computerSelection,humanSelection)
const playRound = (
  computerSelection,
  humanSelection,
  playerScoreEl,
  computerScoreEl,
  gameLogsEl
) => {
  // if(humanSelection == computerSelection)
  const logDataEl = document.createElement("div");

  if (computerSelection == humanSelection) {
    //      print "game tied"
    console.log("game tied");
    computerScore++;
    playerScore++;
    roundTied++;

    gameTiedEl.textContent = `${roundTied}`;
    logDataEl.textContent = `${new Date().getHours()}:${new Date().getMinutes()}: Round ${round}- Game Tied`;
    gameLogsEl.appendChild(logDataEl);
  }
  // else if((humanSelection == "rock" AND computerSelection == "scissor") OR
  // (humanSelection == "paper" AND computerSelection == "rock") OR
  // (humanSelection == "scissors" AND computerSelection == "paper")) then
  else if (
    (humanSelection == "rock" && computerSelection == "scissor") ||
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "scissor" && computerSelection == "paper")
  ) {
    //      print "player won"
    //      playerScore: increment by1
    playerScore++;
    playerScoreEl.textContent = `${playerScore}`;

    logDataEl.textContent = `${new Date().getHours()}:${new Date().getMinutes()}: Round ${round}- You won as: ${humanSelection} beats ${computerSelection}`;
    gameLogsEl.appendChild(logDataEl);
  }
  // else then
  else {
    //      print computer won
    computerScore++;
    computerScoreEl.textContent = `${computerScore}`;

    logDataEl.textContent = `${new Date().getHours()}:${new Date().getMinutes()}: Round ${round}- You Lose as:  ${computerSelection} beats ${humanSelection}`;
    gameLogsEl.appendChild(logDataEl);
    //      computerScore: increment by1
  }

  console.log(computerScore, playerScore);
  if (computerScore == MAX_SCORE || playerScore == MAX_SCORE) {
    const model = document.querySelector(".model");
    showModel(model);
    gameOver(model, computerScore == 5 ? "You Lose" : "You Won");
  }
};
// End Function

function gameOver(model, text) {
  const modelTextEl = document.createElement("p");

  modelTextEl.classList.add("model-text");
  modelTextEl.textContent = text;

  const modelBtnEl = document.createElement("button");
  modelBtnEl.classList.add("model-btn");
  modelBtnEl.textContent = "Go Back";

  model.appendChild(modelTextEl);
  model.appendChild(modelBtnEl);

  modelBtnEl.addEventListener(
    "click",
    () => {
      overlay.classList.remove("show");
      model.classList.remove("show");
      resetGame();
      gameMenuEl.classList.remove("left__slider");

      gamePlayerChoicesContainerEl.classList.remove("slide-from-right");

      gameLogsEl.classList.remove("slide-from-left");
      gameBackBtnEl.classList.remove("show");
      model.innerHTML = "";
    },
    {
      once: true,
    }
  );
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  round = 1;
  roundTied = 0;
  roundEl.textContent = `${round}`;

  playerScoreEl.textContent = `${playerScore}`;
  computerScoreEl.textContent = `${computerScore}`;
  gameStartBtnEl.textContent = "Start";
  gameLogsEl.innerHTML = "";
}

const MAX_SCORE = 5;
// define computerScore:0
let computerScore = 0;
// define playerScore:0
let playerScore = 0;
// define Round:0
let roundTied = 0;
let round = 1;
const overlay = document.querySelector(".overlay");
const gameLogsEl = document.querySelector("[data-game='game-logs']");

const playerScoreEl = document.querySelector(
  "[data-game='player-score'] > span"
);
const computerScoreEl = document.querySelector(
  "[data-game='computer-score'] > span"
);

const gameTiedEl = document.querySelector("[data-game='score-tied'] > span");

const roundEl = document.querySelector("[data-game='round'] > span");
const gamePlayerChoicesContainerEl = document.querySelector(
  "[data-game='game-player-choices']"
);
const gameMenuEl = document.querySelector(".game-menu");
const gameStartBtnEl = document.querySelector(".start-btn");
const gameResetBtnEl = document.querySelector(`[data-game="reset-btn"]`);
const gameBackBtnEl = document.querySelector("[game-data='back-btn']");
// Function playGame

const playGame = () => {
  gameBackBtnEl.addEventListener("click", (e) => {
    gameMenuEl.classList.remove("left__slider");

    gamePlayerChoicesContainerEl.classList.remove("slide-from-right");

    gameLogsEl.classList.remove("slide-from-left");
    gameStartBtnEl.textContent = "Resume";
    gameBackBtnEl.classList.remove("show");
  });
  // reset evennt
  gameResetBtnEl.addEventListener("click", resetGame);

  gameStartBtnEl.addEventListener("click", (ev) => {
    ev.target.closest(".game-menu").classList.add("left__slider");
    document;
    gamePlayerChoicesContainerEl.classList.add("slide-from-right");
    gameLogsEl.classList.add("slide-from-left");
    gameBackBtnEl.classList.add("show");
  });

  gamePlayerChoicesContainerEl.addEventListener("click", (ev) => {
    roundEl.textContent = `${round}`;

    // define computerSelection: call getComputerChoice
    const computerSelection = getComputerChoice();
    // define humanSelection: call getHumanChoice
    const humanSelection = getHumanChoice(ev);

    // call playRound(computerSelection,humanSelection)
    playRound(
      computerSelection,
      humanSelection,
      playerScoreEl,
      computerScoreEl,
      gameLogsEl
    );

    round++;
  });
};

// End Function

playGame();

console.log(`Final Score: computer: ${computerScore} || player ${playerScore}`);
// End

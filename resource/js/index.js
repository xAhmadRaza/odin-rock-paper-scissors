// start getComputerChoice
const getComputerChoice = () => {
  // define computerChoice: generate random between 1 and between 3 inclusive
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  //    if(computerChoiceForComputerChoice == 1) then
  //        return "rock"
  //    else if(computerChoiceForComputerChoice == 2) then
  //        return "paper"
  //    else then
  //        return "scissor"

  console.log(computerChoice);
  return computerChoice === 1
    ? "rock"
    : computerChoice === 2
    ? "paper"
    : "scissor";
  //    end if
};
// end getComputerChoice

// console.log("asdasd");

// start getHumanChoice
const getHumanChoice = (e) => {
  // when the user click on the options button trigger an event
  // document.querySelector(".player-choice")?.addEventListener("click", (e) => {

  // });
  // define humanChoice: capture the user option from the  button events
  const humanChoice = e.target.dataset.playerChoice;
  return humanChoice;
  // return the humanChoice
  // end getHumanChoice
};

// start playRound
const playRound = (getComputerChoice, getHumanChoice, score) => {
  // define computerChoice: call getComputerChoice
  const computerChoice = getComputerChoice();
  //  when the user click on the options button trigger an event
  document.querySelector(".player-choice")?.addEventListener("click", (e) => {
    // define humanChoice: capture the user option from the  button events
    const humanChoice = getHumanChoice(e);

    console.log(humanChoice, computerChoice);
    if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "rock")
    ) {
      console.log("player won");
    } else {
      console.log("computer won");
    }
  });
};
// end playRound
document.addEventListener("DOMContentLoaded", () => {
  let score = {
    computerScore: 0,
    humanScore: 0,
  };
  playRound(getComputerChoice, getHumanChoice, score);
});

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
const getHumanChoice = () => {
  // define humanChoice: prompt "please enter one of the following valid choice"
  // "1 for rock"
  // "2 for paper"
  // "3 for scissor"
  const humanChoice = Number(
    prompt(
      "please enter 1 of the following \nPress '1' for rock\nPress '2' for paper\nPress '3' for scissor"
    )
  );
  //
  //  if(!(humanChoice >=1 And humanChoice <=3)) then
  if (!(humanChoice >= 1 && humanChoice <= 3)) {
    //      print "invalid input"
    console.log("invalid input");
  }
  //  end if

  // if(humanChoice === 1) then
  //    return "rock"

  // else if(humanChoice === 2) then
  //    return "paper"

  // else if if(humanChoice === 3) then
  //    return "scissor"
  // end if

  return humanChoice === 1 ? "rock" : humanChoice === 2 ? "paper" : "scissor";
};
// End Function

// Function playRound(computerSelection,humanSelection)
const playRound = (computerSelection, humanSelection) => {
  // if(humanSelection == computerSelection)
  if (computerSelection == humanSelection) {
    //      print "game tied"
    console.log("game tied");
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
    console.log(`player won: ${humanSelection} beats ${computerSelection}`);
    //      humanScore: increment by1
    humanScore++;
  }
  // else then
  else {
    //      print computer won
    console.log(`computer won: ${humanSelection} beats ${computerSelection}`);
    computerScore++;
    //      computerScore: increment by1
  }
};
// End Function

// define computerScore:0
let computerScore = 0;
// define humanScore:0
let humanScore = 0;
// Function playGame

const playGame = () => {
  // define computerSelection: call getComputerChoice
  const computerSelection = getComputerChoice();
  // define humanSelection: call getHumanChoice
  const humanSelection = getHumanChoice();

  // call playRound(computerSelection,humanSelection)
  playRound(computerSelection, humanSelection);
};

// End Function

// Start
// FOR count <=5 do
for (let count = 1; count <= 2; count++) {
  // call playRound()

  playGame();
}
// end FOR

console.log(`Final Score: computer: ${computerScore} || player ${humanScore}`);
// End

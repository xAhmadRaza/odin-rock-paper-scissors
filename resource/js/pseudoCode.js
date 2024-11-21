// Function getComputerChoice()

// define computerChoice: generate a random  number between 1 and 3 inclusive

// if(computerChoice == 1) then
//   return "rock"s
// else if(computerChoice == 2) then
//   return "paper"
// else then
//   return "scissor"
// end if

// End Function

// Function  getHumanChoice

// define humanChoice: prompt "please enter one of the following valid choice"
// "1 for rock"
// "2 for paper"
// "3 for scissor"

//  if(!(humanChoice >=1 And humanChoice <=3)) then
//    print "invalid input"
//  end if

// if(humanChoice === 1) then
//  return "rock"
// else if(humanChoice === 2) then
//  return "paper"
// else if if(humanChoice === 3) then
//  return "scissor"

// end if

// End Function

// Function playRound(computerSelection,humanSelection)

// if(humanSelection == computerSelection)
//      print "game tied"
// else if((humanSelection == "rock" AND computerSelection == "scissor") OR
// (humanSelection == "paper" AND computerSelection == "rock") OR
// (humanSelection == "scissors" AND computerSelection == "paper")) then
//    print "player won"
//    humanScore: increment by 1
// else then
//      print computer won
//      computerScore: increment by 1

// End Function

// define computerScore:0
// define humanScore:0

// Function playGame

// define computerSelection: call getComputerChoice
// define humanSelection: call getHumanChoice

// call playRound(computerSelection,humanSelection)

// End Function

// Start
// FOR count <=5 do

// call playRound()

// end FOR

// print (`Final Score: computer: ${computerScore} || player ${humanScore}`);
// End

// is outdated and does not work with the UI-RPS

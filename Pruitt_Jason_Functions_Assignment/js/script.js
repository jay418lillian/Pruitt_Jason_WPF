/**
Jason Pruitt
3-26-15
SDI
 C201503
Functions Assignment
 */

//variables

var choice = prompt("Would you like to play the PowerBall or Florida Lottery?\nPlease enter PowerBall or Florida Lottery.");

//functions

function powerBallValidation(lotteryChoice){

 var timesClicked = 1;

 while (lotteryChoice === ""){

  lotteryChoice = prompt("You did not enter a lottery choice,\n Please enter PowerBall or Florida Lottery.");

  timesClicked++;

  if (timesClicked === 5) {

   console.log("You did not enter PowerBall or Florida Lottery.\nPlease refresh the page and enter the requested information.");
   break;

  }

 }

 return lotteryChoice;

}

//main code

choice = powerBallValidation(choice);
console.log("You have chosen to play " + choice + "! Good Luck!");
/**
Jason Pruitt
3-26-15
SDI
 C201503
Functions Assignment
 */

//variables

var choice = prompt("Would you like to play the PowerBall or Florida Lottery?\nPlease enter PowerBall or Florida Lottery.");

//Functions
//Function that validates choice prompt.

function powerBallValidation(lotteryChoice){

 var timesClicked = 1;

 while (lotteryChoice === ""){

  lotteryChoice = prompt("You did not enter a lottery choice,\n Please enter PowerBall or Florida Lottery.");

  timesClicked++;

  if (timesClicked === 5) {

   console.log("You did not enter if you preferred to play PowerBall or the Florida Lottery.\nPlease refresh the page and enter the requested information.");

  }

 }

 return lotteryChoice;

}

//function that generates random PowerBall numbers.

function powerballGen(min, max, num){

 var powerballArray = [];

 // Math.random() * (max - min) + min
 for (var i = 0; i < num; )

}

//main code

choice = powerBallValidation(choice);
console.log("You have chosen to play " + choice + "! Good Luck!");
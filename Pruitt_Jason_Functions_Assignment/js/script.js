/**
Jason Pruitt
3-26-15
SDI
 C201503
Functions Assignment
 */

//variables

var choice = prompt("Would you like to play the PowerBall or Florida Lottery?\nPlease enter PowerBall or Florida Lottery.");
var choicePowerBall;
var powerballNumber;
var choiceFloridaLottery;

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

//function that generates first 5 random PowerBall numbers.

function powerballGen(min, max, num){

 var powerballArray = [];

 // Math.random() * (max - min) + min
 for (var i = 0; i < num; i++) {

  var powerNumbers = Math.round(Math.random() * (59 - 1) + 1);

  powerballArray [i] = powerNumbers;

 }

 return powerballArray;

}

//function that generates 6th PowerBall Number

function powerballNumberGen(min, max, num) {

 var ballArray = [];

 for (var i = 0; i < num; i++){

  var ballNumbers = Math.round(Math.random() * (35 - 1) + 1);

  ballArray [i] = ballNumbers;

 }

 return ballArray;

}

//function that generates 5 random numbers for Florida Lottery

function floridaLottoGen(min, max, num) {

 var lottoArray = [];

 for (var i = 0; i < num; i++){

  var lottoNumbers = Math.round(Math.random() * (53 - 1) + 1);

  lottoArray [i] = lottoNumbers;

 }

 return lottoArray;

}

//main code

choice = powerBallValidation(choice);
console.log("You have chosen to play " + choice + "! Good Luck!");

choicePowerBall = powerballGen(1, 59, 5);
console.log("Your lottery Numbers are " + choicePowerBall + ".");

powerballNumber = powerballNumberGen(1, 35, 1);
console.log("Your PowerBall Number is " + powerballNumber + ".");

choiceFloridaLottery = floridaLottoGen(1, 53, 6);
console.log("Your Florida Lottery Numbers are  " + powerballNumber + ".");
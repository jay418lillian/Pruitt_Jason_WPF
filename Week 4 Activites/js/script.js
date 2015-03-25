/**
Jason Pruitt
3-24-14
SDI
 C201503
Week 4 Activities
 */

//variables

//var myName = prompt("Enter your name please:");
var myRandom;

//functions

function nameValidation(firstName){

 var timesCLicked = 1;

 while (firstName === ""){

  firstName = prompt("Do not leave this blank.\nPlease enter your first name:");

  timesCLicked++;

  if (timesCLicked === 10) {
  console.log("Enough! I don't have the time for this!");
   break;
  }

 }

 return firstName;

}


function randomNumGen (min, max, num) {

 var randomArray = [];

 // Math.random() * (max - min) + min
 for (var i = 0; i < num; i++) {


  var myRandomNumber = Math.round(Math.random() * (max - min) + min);

 randomArray [i] = myRandomNumber;
  }

 return randomArray;

}


//main code

//myName = nameValidation(myName);
//console.log("Hello, " + myName + ".");

myRandom = randomNumGen(10, 100, 5);
console.log(myRandom);

myRandom = randomNumGen(50, 1000, 10);
console.log(myRandom);
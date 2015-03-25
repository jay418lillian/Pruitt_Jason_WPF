/**
Jason Pruitt
3-24-14
SDI
 C201503
Week 4 Activities
 */

//variables

var myName = prompt("Enter your name please:");

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
}

//main code

nameValidation(myName);
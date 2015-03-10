/**
Jason Pruitt
3-10-15
SDI
 C201503
Expressions Assignment
 */

//Create variables using prompts to ask user for input

 alert("I am calculating the percentage of your income that you spend on gas for your vehicle.");
var gasWeek1 = prompt("How much money did you put in gas the first week of February?");
var gasWeek2 = prompt("How much gas money did you spend in Week 2?");
var gasWeek3 = prompt("Week 3?");
var gasWeek4 = prompt("And how about week 4?");
var income = prompt("Now what is your average monthly income?")
//create an array and convert prompts to number for use in calculation.

var gasTotalArray = [Number(gasWeek1), Number(gasWeek2), Number(gasWeek3), Number(gasWeek4)];   //Array that collects prompt information and converts strings to numbers
var gasTotal = gasTotalArray[0] + gasTotalArray[1] + gasTotalArray[2] + gasTotalArray[3];       //Using array to add the total amount of money spent on Gas
income = Number(income);                                                                        //convert input to number.



console.log(income);
console.log(gasTotal);

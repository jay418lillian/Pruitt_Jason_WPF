/**
Jason Pruitt
3-10-15
SDI
 C201503
Expressions Assignment
 */

//Create variables using prompts to ask user for input

alert("I am calculating how many fluid ounces you drink in a year! \nLets get started.");
var cups = prompt("How many cups of water do you consume daily? \nIt can be an estimate.");
var pints = prompt("How many pints of milk do you generally drink on a weekly basis?");

//create an array and convert prompts to number for use in calculation.

var gasTotalArray = [Number(gasWeek1), Number(gasWeek2), Number(gasWeek3), Number(gasWeek4)];   //Array that collects prompt information and converts strings to numbers
var gasTotal = gasTotalArray[0] + gasTotalArray[1] + gasTotalArray[2] + gasTotalArray[3];       //Using array to add the total amount of money spent on Gas
income = Number(income);                                                                        //convert input to number.


var gasExpense = income / gasTotal;

console.log(income);
console.log(gasTotal);
console.log(gasExpense);
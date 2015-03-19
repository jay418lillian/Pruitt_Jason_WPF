/**
Jason Pruitt
3-19-15
 SDI
 C201503
 Conditionals Assignment
 */

var myOccupation    = "Dexter Axle";                                                        //string variable
var lastYearIncome  = Number(prompt("How much money did you earn in 2014"));                //Number variable for last years Income
var thisYearIncome  = Number(prompt("How much money will you earn at the end of 2015"));    //Number variable for this years Income
var gotPromoted     = confirm("Did you get promoted this year?\nOK for true, Cancel for false.");                                                                 //Boolean indicating Promotion

//outputs
console.log("You work at " + myOccupation + "!");
console.log("You earned " + lastYearIncome + " dollars last year.");
console.log("You are projected to earn " + thisYearIncome + " dollars this year.");
console.log("It is " + gotPromoted + " that you got promoted!");

//boolean conditional
if (gotPromoted === true && thisYearIncome > lastYearIncome) {

    //code that runs if gotPromoted is True
    console.log("You may be eligible to buy a new car!");

} else {

    //code that runs if gotPromoted is False
    console.log("You may want to save up a little more cash before trying to buy a new car.");
}
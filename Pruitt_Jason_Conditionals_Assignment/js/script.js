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
var wantNewCar      = confirm("Do you want buy a new car?\nOK for true, Cancel for false.");  // boolean for buying a new car.                                                               //Boolean indicating Promotion
var ifCar           = Number(prompt("If you could or wanted to buy a new car, how much would you spend? "));

//outputs
console.log("You work at " + myOccupation + "!");
console.log("You earned " + lastYearIncome + " dollars last year.");
console.log("You are projected to earn " + thisYearIncome + " dollars this year.");
console.log("It is " + wantNewCar + " that you want to buy a new car!");


//boolean conditional
if (wantNewCar === true && thisYearIncome > lastYearIncome) {

    //code that runs if wantNewCar is True AND thisYearIncome > lastYearIncome
    console.log("Based on the increase in your wages, you may be able to buy a new car!");

} else {

    //code that runs if wantNewCar is true AND thisYearIncome < lastYearIncome
    console.log("You may want to save up a little more cash before trying to buy a new car.");


}
if (wantNewCar === false) {

    //code that runs if wantNewCar is false
    console.log("")

} else if (ifCar >= thisYearIncome * 10){

    //code that runs if ifCar is 10 times >= thisYearIncome
    console.log("You would spend 10 times or more than this year's income on a new car!");

}else {



}
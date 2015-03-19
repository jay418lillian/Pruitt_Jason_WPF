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

} else if (wantNewCar === true && thisYearIncome < lastYearIncome) {

    //code that runs if wantNewCar is true AND thisYearIncome < lastYearIncome
    console.log("You may want to save up a little more cash before trying to buy a new car.");


} else {

    //code that runs if wantNewCar is False
    console.log("You don't want to buy a new car?!")

}

//conditional for ifCar
if (ifCar >= thisYearIncome * 4) {

    //code that runs if ifCar is >= 4 * thisYearIncome
    console.log("If you wanted to buy a new car you would spend 4 times or more of your annual income?!\n Must be a pretty sweet ride!");
} else {

    //code that runs if ifCar < 4 * thisYearIncome
    console.log("If you wanted to buy a new car, you would spend less than 4 times your annual budget.\n" +
    "That isn't too far out of reach if you save for a little while.");
}

var carBrand = prompt("What kind of car would you end up buying?");
/*
if (carBrand === "") {

    //code that runs if carBrand is empty
    carBrand = prompt("You forgot to enter a brand of car.\nPlease enter a car.");
    console.log("You would buy a " + carBrand + ".");
} else {
        console.log("You would buy a " + carBrand + ".");
    }
*/

(carBrand === "") ? prompt("You forgot to enter a brand of car.\nPlease enter a car.") : console.log("You would buy a " + carBrand + ".");
console.log("You would buy a " + carBrand + "!");
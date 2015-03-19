/**
Jason Pruitt
3-19-15
 SDI
 C201503
 Conditionals Assignment
 */

var myAddress       = "123 Elm Street";     //string variable
var myFavoriteStore = "Publix";             //string variable
var milesToStore    = 6.5;                  //miles to store
var construction    = false;                //Boolean indicating construction

//outputs
console.log("I Live at " + myAddress + ".");
console.log("I shop at " + myFavoriteStore + ".");
console.log("It's only " + milesToStore + " miles to the store.");
console.log("It is " + construction + " that there is construction en route.");
//confirm - return true is OK is clicked and false is Cancel is clicked
construction = confirm("Is there still construction? Ok for true, or Cancel for false.");

//Boolean Conditional
if (construction === true) {

    //code that run if construction is true
    var extraMiles = Number(prompt("How many more miles is it to the store?"));

    if (extraMiles >= 3) {

        //this code runs uf construction is true AND extraMiles >= 3
        extraMiles = extraMiles + milesToStore;
        console.log("The total miles will be " + extraMiles + ".");
    } else {

        //code that runs if construction is true AND extraMiles <= 3
        console.log("There won't be much added to the trip.");
    }
} else {

    //code that runs if construction is false
    console.log("Nope, no construction today!");
    var emptyString = prompt("What store would you like to visit?");

    if (emptyString === "") {

        emptyString = prompt("Please enter a store name.");
        console.log(" You want to go to " + emptyString + ".");
    } else {
        console.log("You want to visit " + emptyString + ".");
    }
};

console.log("Lets go to the store!");
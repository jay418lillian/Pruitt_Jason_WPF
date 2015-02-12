/**
 * Jason Pruitt
 * SDI 1502
 * Section 1
 * 2-11-15
 * Expressions WorkSheet
 */


//Variables and Data Types

//Calculate Sparky's Age

var age;
var dogYears;


//Multiply age times 7 to obtain dog years.

age = 4;
dogYears = age * 7;


// Outputs
//Print out the Age of Sparky in Dog Years.
console.log("Sparky is " + age + " in human years, which is " + dogYears + " in dog years.");

//Calculate how many slices of pizza everyone will receive.
var slices;
var people;
var pizzas;
var slicesPerPerson;

pizzas = 7;
slices = 8;
people = 15;

slicesPerPerson = (pizzas * slices) / people;

//Each person receives X slices of pizza at the party.
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Calculate how many left over pieces of pizza Sparky gets to eat.

var sparkySlices;

sparkySlices = (pizzas * slices) % people;


//Print Sparky got X slices of pizza.

console.log("Sparky got " + sparkySlices + " slices of pizza.");

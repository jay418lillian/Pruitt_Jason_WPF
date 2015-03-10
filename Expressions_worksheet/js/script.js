/**
Jason Pruitt
3-9-15
SDI
 C201503
Expressions Worksheet
 */
//Dog Years
//Calculate how old Sparky the pit bull is in dog years.

var dogAge = 6;

//Multiply dogAge * 7

var dogYears = dogAge * 7;

//Print output to console

console.log("Sparky is " + dogAge + " human years old which is " + dogYears + " in dog years.");

//Slice of Pie part 1
//Calculate how many slices of Pizza each person receives.

var slicesPerPizza = 8;     //given variable for slices per pizza
var people = 9;            //given variable for number of people
var pizzas = 6;             //given variable for number of pizzas

//Multiply slicesPerPizza * pizzas and divide result by people.

var slicesPerPerson = slicesPerPizza * pizzas / people;

//Print slicesPerPerson to console.

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Slice of Pie part 2
//Calculate number of left over slices of pizza that Sparky will eat.

var sparkysShare = slicesPerPizza * pizzas % people;

//print result to console

console.log("Sparky got " + sparkysShare + " slices of pizza.");
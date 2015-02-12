/**
 * Jason Pruitt
 * SDI 1502
 * Section 1
 *2-12-15
 * Expressions Assignment
 */

var apples = prompt("I am calculating the amount of fruit you eat in a month. \n Enter how many apples you eat a week.");
var oranges = prompt("How many oranges do you eat in a month?");
var bananas = prompt("How many bananas do you eat every two weeks?");

var fruit = [apples * 4, oranges, bananas * 2];

var totalFruit;
totalFruit = fruit[0] + fruit[1] + fruit[2];








console.log(fruit)

console.log(totalFruit)

alert("Wow, I project you will eat " + totalFruit + " pieces of fruit this month!");
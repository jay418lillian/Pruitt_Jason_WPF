/* Jason Pruitt
 * SDI 1502
 * Section 1
 * 2-12-15
 */

var apples = prompt("I am calculating how much fruit you consume in a month. How many apples do you eat in a week?") * 4;
var bananas = prompt("How many bananas do you eat every two weeks?") * 2;
var oranges = prompt("How many oranges do you eat in a week?") * 4;
var fruit = [apples, bananas, oranges];
var fruitTotal = fruit[0] + fruit[1] + fruit[2];

console.log(apples);
console.log(bananas);
console.log(oranges);
console.log(fruit);

alert("Wow, you are projected to eat " + fruitTotal + " pieces of fruit this month!");
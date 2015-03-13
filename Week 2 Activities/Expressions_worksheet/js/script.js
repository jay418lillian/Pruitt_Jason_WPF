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

var slicesPerPizza = 10;     //given variable for slices per pizza
var people = 15;            //given variable for number of people
var pizzas = 7;             //given variable for number of pizzas

//Multiply slicesPerPizza * pizzas and divide result by people.

var slicesPerPerson = slicesPerPizza * pizzas / people;

//Print slicesPerPerson to console.

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Slice of Pie part 2
//Calculate number of left over slices of pizza that Sparky will eat.

var sparkysShare = slicesPerPizza * pizzas % people;

//print result to console

console.log("Sparky got " + sparkysShare + " slices of pizza.");

//Average Shopping bill
//Calculate the average amount of money spent over the last 5 weeks.

var shoppingBill = [222, 178, 278, 313, 199];
var totalBill = shoppingBill[0] + shoppingBill[1] + shoppingBill[2] + shoppingBill[3] + shoppingBill[4];
var average = (shoppingBill[0] + shoppingBill[1] + shoppingBill[2] + shoppingBill[3] + shoppingBill[4]) / 5;    //use PEMDAS

//print results to console.

console.log("You have spent a total of " + totalBill + " on groceries over 5 weeks. That is an average of " + average + " per week.");

//Discounts
//Calculate the discounted price for an item

var shoes = "brand new Jordan\'s"
var originalPrice = 300;
var discount = 20;
var discountPercent = discount / 100;
var withoutTax = originalPrice - (originalPrice * discountPercent);
var withTax = withoutTax * 1.07;

//print calculations to console.

console.log("Your " + shoes + " were originally $" + originalPrice + " but after a " + discount + "% discount, it is now $" + withoutTax + " without tax, and $" + withTax + " with tax.");
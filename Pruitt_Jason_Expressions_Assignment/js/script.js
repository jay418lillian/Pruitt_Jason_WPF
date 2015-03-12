/**
Jason Pruitt
3-10-15
SDI
 C201503
Expressions Assignment
 */

//Create variables using prompts to ask user for input and convert input to Number Data Type for use in conversions.

alert("I am calculating how many fluid ounces you drink in a year! \nLets get started.");               //Alert user of intentions
var cups = Number(prompt("How many cups of water do you consume daily? \nIt can be an estimate."));     //Ask user for input on cups
var gallons = Number(prompt("How many gallons of milk do you generally drink in a month basis?"));      //Ask user for input on gallons
var cans =Number(prompt("How many cans of soda do you enjoy in the average week?"));                    //Ask user for input on cans

//Convert User Input to Fluid Ounces in a year

cups *= 365;        //Calculate cups drank in a year
gallons *= 12;      //Calculate gallons drank in a year
cans *= 52;         //Calculate cans drank in a year

cups *= 8;          //Convert to fluid ounces
gallons *= 128;     //Convert to fluid ounces
cans *= 12;         //Convert to fluid ounces

//Create an Array to calculate total fluid ounces

var totalOuncesArray = [cups, gallons, cans];
var totalOunces = totalOuncesArray[0] + totalOuncesArray[1] + totalOuncesArray[2];

//Print results to console using Concatenation.

console.log("You are estimated to drink an astonishing total of " + totalOunces + " fluid ounces this year!");

//Test Results

/**
 First Trial:

 I used 10 for all of the inputs to test the code
 Cups of water drank           = 29200 Fluid Ounces
 Gallons of milk drank         = 15360 Fluid Ounces
 Cans of Soda drank            = 6240 Fluid Ounces
 Which equals     -------------> 50800 Fluid Ounces

 Second Trial:

 I used 5 for all of the inputs to test the code
 Cups of water drank           = 14600 Fluid Ounces
 Gallons of milk drank         =  7680 Fluid Ounces
 Cans of Soda drank            =  3120 Fluid Ounces
 Which equals     -------------> 25400 Fluid Ounces
 */


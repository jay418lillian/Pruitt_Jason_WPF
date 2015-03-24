/**
Jason Pruitt
3-24-15
SDI
 C201503
 Functions Worksheet
 */

    //Example
    //Calculate the Area of a Rectangle

var width = 5;
var height = 6;
var area = calcArea(width,height);

function calcArea(w, h){

 return w*h;
}

console.log("The area of the rectangle is " + area);

    //Circumference
    //Calculate the Circumference of a Circle

var radius = 5;
var pie = 3.14;


var circumference = calcCircle(radius,pie);

function calcCircle(r,p){

 return r * p * 2;
}

console.log("The circumference of the circle is " + circumference + ".");
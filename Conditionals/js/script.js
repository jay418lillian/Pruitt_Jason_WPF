/**
 * Created by Jason on 2/12/15.
 */

var kidHeight = 45;
var minHeight = 48;
var parentHeight = 45;
//if the child is old enough, print to console " you can ride."
//if kid is over 48 inches in height

if(kidHeight > minHeight){
    //code performed if conditional is true
    console.log("You can ride the coaster!");
}
else if(kidHeight >= parentHeight){
    console.log("You can ride, but only with a parent present.");
}else{
    console.log("Sorry kid, you've got some growing to do first.");

}
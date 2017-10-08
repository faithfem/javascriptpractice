//WHILE LOOP THAT COUNTS DOWN

var num = 10;
while (num>0) {
  console.log(num--);
}

//WHILE LOOP THAT COUNTS UP FROM 0
var x = 0;
while (x<11) {
  console.log(x++);
}

//WHILE LOOP
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber < 13) {
console.log("There will be " + numSheep
+ " sheep after " + monthNumber + " month(s)!");

numSheep*=4
monthNumber++;
}

//CODE ACADEMY SOLUTION WHILE LOOP
// var numSheep = 4;
// var monthNumber = 1;
// var monthsToPrint = 12;
//
// while (monthNumber <= monthsToPrint) {
//   numSheep *= 4;
//   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
//   monthNumber++;
// }

//HOOVERDAM.JS
var currentGen = 1;
var totalGen = 19;
var totalMWS = 62;
var totalMW = 62;

while (currentGen <= 4) {
console.log("Generator #" + currentGen + " is on, adding " + totalMWS + "MW, for a total of " + totalMW + "MW!")


currentGen++;
totalMW*=2
}

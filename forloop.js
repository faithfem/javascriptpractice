var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

for (var numSheep = 4; monthNumber <= monthsToPrint; numSheep*=4){
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

// CODEACADEMY SOLUTION
// var numSheep = 4;
// var monthsToPrint = 12;
//
// for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
//   numSheep = numSheep * 4;
//   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
// }

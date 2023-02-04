// Declare the myGlobal variable below this line
const oopsGlobal = 5;
let myGlobal;
function fun1() {
  // Assign 5 to oopsGlobal here
  myGlobal = 10;
}
fun1();
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
let myString = "Eleanor Roosevelt";
let myRegex = /(?=nor\sRoosevelt)|(?=lin\sD.\sRoosevelt)/g; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
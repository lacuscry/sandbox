let hello = "   Hello, World!  ";
let wsRegex = /\s{3}Hello, World!\s{2}/; // Change this line
let result = hello.replace(wsRegex, "Hello, World!"); // Change this line
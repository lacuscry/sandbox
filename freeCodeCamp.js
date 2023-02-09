let sampleWord = "astronaut";
let pwRegex = /(?=\w{0,5})(?=\D{2,5}\d{2,5})/; // Change this line
let result = pwRegex.test(sampleWord);
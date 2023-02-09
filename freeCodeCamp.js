let username = "JackOfAllTrades";
let userCheck = /(^[a-zA-Z]{2,}[0-9]{0,2}$)|([a-zA-Z][0-9]{2}$)/gi; // Change this line
let result = userCheck.test(username);
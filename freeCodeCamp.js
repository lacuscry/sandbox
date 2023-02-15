const palindrome = str => str.replace(/\W|_/g,'').toLowerCase() === str.replace(/\W|_/g,'').toLowerCase().split('').reverse().join('');

palindrome("never odd or even")
palindrome("not a palindrome");
palindrome("almostomla");
palindrome("1 eye for of 1 eye.");
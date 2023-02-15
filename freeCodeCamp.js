const romanNums = {
  1000: 'M', 900: 'CM', 500: 'D',
  400: 'CD', 100: 'C', 90: 'XC',
  50: 'L', 40: 'XL', 10: 'X',
  9: 'IX', 5: 'V', 4: 'IV',
  1: 'I'
}

function convertToRoman(num) {
  let total = 0;
  let romanTotal = '';


  for (let romanNum of Object.entries(romanNums).reverse()) {
      if (num >= +romanNum[0]) {
        while (total + +romanNum[0] <= num) {
          total += +romanNum[0];
          romanTotal += romanNum[1];
        }
      }
  }

    
 return romanTotal;
}

convertToRoman(36);
convertToRoman(44);
convertToRoman(45);
convertToRoman(97);
convertToRoman(400);
convertToRoman(2014);
convertToRoman(3999);
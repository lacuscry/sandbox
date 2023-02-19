function divisors(integer) {
    const nums = Array.from({length: integer}, (a, b) => b > 1 && !(integer / b % 1) && b).filter(Number);
    
    return nums.length ? nums : `${integer} is prime`;
  };
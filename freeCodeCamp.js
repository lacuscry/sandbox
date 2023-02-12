function sumPrimes(num) {
  let arr = Array.from({length: num}, (a, b) => ++b);

  return arr.reduce((a, b) => a + b) - arr.filter(a => arr.filter(b => !((a / b) % 1)).length > 2).reduce((a, b) => a + b) - 1;
}

sumPrimes(10);
sumPrimes(977);
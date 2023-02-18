function countPositivesSumNegatives(input) {
  const arr = input?.sort((a, b) => a - b).filter(a => a >= 0);
  
  return input?.length ? [arr.filter(Number).length, input.slice(0, input.length - arr.length).reduce((a, b) => a + b, 0)] : [];
}
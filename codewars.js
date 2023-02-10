const getSum = (a, b) => {
  let total = 0;
  
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      total += i;
  }

  return a === b ? a : total;
};
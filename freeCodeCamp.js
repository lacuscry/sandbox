function sumFibs(num) {
  const arr = [1];
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (arr.length > 3) {
      arr.push(arr.slice(-2).reduce((a, b) => a + b));
    } else {
      arr.push(i);
    }
  }

  arr.reverse().forEach(a => {
    if (a % 2 && a <= num) {
      sum += a;
    }
  })

  return sum;
}

sumFibs(3); //2
sumFibs(4); //5
sumFibs(1000); //1785
sumFibs(75025); //135721
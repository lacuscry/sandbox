const getDivisorsCnt = n => {
  let nums = [];

  for (let i = 1; i <= n; i++) {
    Number.isInteger(n / i) && nums.push(i);
  };

  return nums.length;
};
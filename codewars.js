function highAndLow(nums) {
  const maxNum = nums.split(' ').map(n => +n).reduce((a, b) => Math.max(a, b));
  const minNum = nums.split(' ').map(n => +n).reduce((a, b) => Math.min(a, b));
  
  return`${maxNum} ${minNum}`;
}
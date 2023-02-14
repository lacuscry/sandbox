function dontGiveMeFive(start, end) {
    const nums = []  
  
    for (let i = start; i <= end; i++) {
      if ((i % 5 || !(i % 10)) && (i < 50 || i > 59)) {
        nums.push(i);
      }
    }
  
    return nums.length;
};
function digPow(n, p){
    const nums = ('' + n).split('').map((a, i) => Math.pow(a, p + i));
  
    let res = nums.reduce((a, b) => a + b);
   
    return res === n * p && res / n % 1 ? 1 : res !== n * res / n || res / n % 1 ? -1 : res / n;
  }
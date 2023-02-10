function findEvenIndex(arr){
  let center;
  
  arr.forEach((el, i) => {
      let leftSum = 0;
      let rightSum = 0;
      
    
      for (let k = i; k < arr.length; k++) {
          leftSum += arr[k]
      }
    
      for (let j = i; j >= 0; j--) {
          rightSum += arr[j]
      }
    
    
      if (leftSum === rightSum) {
          center = i;
      }
  });
  
  return arr.every(el => el === 0) ? 0 : center !== undefined ? center : -1;
}
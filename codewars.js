function findOdd(A) {
   const repeatedNums = {}
   
   A.forEach(a => repeatedNums[a] = 0);
   
   A.forEach(a => {
     if (repeatedNums.hasOwnProperty(a)) {
       repeatedNums[a] += 1;
     }
   })
   
   
   for (const key of Object.keys(repeatedNums)) {
     if (repeatedNums[key] % 2) {
       return +key;
     }
   }
 }
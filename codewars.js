function comp(array1, array2){
   if (!array1 || !array2) {
       return false
   }
   
   const isSame = array2.every(a => {
     if (array1.includes(Math.sqrt(a))) {
         array1[array1.indexOf(Math.sqrt(a))] = 0;
         return true;
     } else {
         return false;
     }
   });
   
   return isSame;
 }
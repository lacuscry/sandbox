function smallestCommons(arr) {
  const array = [];
  let isEvery;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      array.push(i);
  }

  for (let i = array[0]; !isEvery; i++) {
      isEvery = array.every(a => !(i / a % 1));
     
      if (isEvery) {
        return i;
       }
  }
}
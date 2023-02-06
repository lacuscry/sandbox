function sortArray(array) {
    const odd = [];
    const even = [];
    
    const arr = array.map((a, i) => a % 2 === 0 ? a : odd.push(a) && even.push(i) && 0);
    
    even.forEach((a, i) => arr[even[i]] ? 0 : arr[even[i]] = odd.sort((a, b) => a - b)[i]);
    
    return arr;
  }
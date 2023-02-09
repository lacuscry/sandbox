function frankenSplice(arr1, arr2, n) {
    const newArr = [...arr1];
  
    newArr.unshift(arr2.slice(0, n));
    
    newArr.push(arr2.slice(n, arr2.length));
    
    return newArr.flat();
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
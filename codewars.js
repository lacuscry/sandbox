function moveZeros(arr) {
    const newArr = [...arr.filter(a => a !== 0)];
    
    while (arr.length > newArr.length) {
      newArr.push(0);
    }
    
    return newArr;
  }
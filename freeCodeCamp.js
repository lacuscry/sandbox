function dropElements(arr, func) {
  const array = [...arr];
  
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return array
    }

    array.shift();
  }

  return array
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
dropElements([0, 1, 0, 1], function(n) {return n === 1;})
dropElements([1, 2, 3], function(n) {return n > 0;})
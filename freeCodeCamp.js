function destroyer(array, ...other) {
    return array.filter(a => other.indexOf(a) < 0);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
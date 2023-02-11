function uniteUnique(...arrays) {
    return [...new Set(arrays.flat())];
  }
  
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
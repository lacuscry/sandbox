function chunkArrayInGroups(arr, size) {
    const res = [];
  
    while (0 < arr.length) {
        res.push(arr.splice(0, size))
    }
  
    return res;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
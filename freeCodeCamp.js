function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter((a, i, arr) => arr.indexOf(a) === arr.lastIndexOf(a));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
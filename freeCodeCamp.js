function steamrollArray(arr) {
  return arr.toString().split(',').map(a => +a ? +a : /object Object/g.test(a) ? {} : a).filter(a => a);
}

steamrollArray([1, [], [3, [[4]]]])
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
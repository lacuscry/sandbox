function firstNonConsecutive (arr) {
  let result;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      result = arr[i + 1];

      break;
    }

    result = null;
  }

  return result;
}
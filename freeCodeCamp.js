function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr[0];
    arr.shift(arr[0]);
    return removed;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
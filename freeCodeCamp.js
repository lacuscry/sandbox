Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((a, i, arr) => callback(a, i, arr) && newArray.push(a));
    // Only change code above this line
    return newArray;
  };
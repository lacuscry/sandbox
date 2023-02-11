Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((a, i, arr) => newArray.push(callback(a, i, arr)));
    // Only change code above this line
    return newArray;
  };
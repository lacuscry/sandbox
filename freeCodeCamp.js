const squareList = arr => {
    // Only change code below this line
    return arr.filter(a => !(a % 1) && a > 1).map(a => a * a);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
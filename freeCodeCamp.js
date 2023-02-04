function testSize(num) {
    // Only change code below this line
    if (num > 19) {
      return 'Huge';
    } else if (num > 14) {
      return 'Large';
    } else if (num > 9) {
      return 'Medium';
    } else if (num > 4) {
      return 'Small';
    } else {
      return 'Tiny';
    }
    // Only change code above this line
  }
  
  testSize(7);
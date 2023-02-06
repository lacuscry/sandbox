function twoSum(numbers, target) {
    let result;
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] + numbers[i - 1] === target) {
          result = [i, i - 1];
          break;
        } else {
          for (let j = numbers.length; j >= 0; j--) {
            if (numbers[i] + numbers[j] === target) {
              result = [i, j];
            }
          }
        }
    }
  
    return result;
}
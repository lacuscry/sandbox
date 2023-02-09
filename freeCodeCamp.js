const findElement = (arr, func) => arr.filter(a => func(a))[0];

findElement([1, 2, 3, 4], num => num % 2 === 0);
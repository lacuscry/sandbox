const factorialize = num => Array.from({length: num}, (a, i) => ++i).reduce((a, b) => a * b, 1);

factorialize(5);
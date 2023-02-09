const findLongestWordLength = str => Math.max(...str.split(' ').map(a => a.length));

findLongestWordLength("The quick brown fox jumped over the lazy dog");
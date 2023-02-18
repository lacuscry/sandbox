const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 
'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];

function findMissingLetter(array) {
  const wordCase = array.every(a => alphabet.indexOf(a) >= 0);
  
  const res = array.map(a => alphabet.indexOf(a.toUpperCase())).map((a, i, arr) => a + 1 !== arr[i + 1] && alphabet[arr[i] + 1]).filter(a => a)[0];

  return wordCase ? res : res.toLowerCase();
}
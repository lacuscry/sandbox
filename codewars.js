function duplicateEncode(word){
  const repeated = {};
        
  word.toLowerCase().split('').forEach((a, i, arr) => i === arr.indexOf(a) ? repeated[a] = '(' : repeated[a] = ')');
  
  return word.toLowerCase().replace(/./g, x => repeated[x]);
}
function longest(s1, s2) {
  let array = new Set();
  
  [...s1, ...s2].forEach(l => array.add(l));
  
  return [...array].sort().join('');
}
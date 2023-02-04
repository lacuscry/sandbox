function repeatStr (n, s) {
  let string = s;
  
  for (let i = 1; i < n; i++) {
    string += s;
  }
  
  return string;
}
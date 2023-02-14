function digitalRoot(n) {
    let sumString = n.toString();
    
    do {
      sumString = sumString.match(/./g).reduce((a, b) => +a + +b).toString();
    } while (sumString.length > 1)
    
    return +sumString;
  }
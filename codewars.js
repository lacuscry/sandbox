function persistence(num) {
    let count,
        total = num;
    
    for (count = 0; `${total}`.length > 1; count++) {
        total = `${total}`.split('').reduce((a, b) => a * b);
    }
    
    return count;
  }
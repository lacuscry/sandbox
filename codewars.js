function narcissistic(value) {
  for (let i = 0; i < 10; i++) {
    if (value === value.toString().split('').map(a => a ** i).reduce((a, b) => a + b)) {
      return true;
    }
  }
  
  return false;
}
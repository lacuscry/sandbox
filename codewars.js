function largest(n, array) {
    const filterArr = array.sort((a, b) => a - b);
  
    if (n) {
      return filterArr.slice(-n);
    } else {
      return filterArr.slice(filterArr.length);
    }
}
function SeriesSum(n){
    let result = n ? 1 : 0;
    let count = 1;
  
    for (let i = 1; count < n; count++) {
      i += 3;
      result += 1 / i;
    }
  
    return result % 1 == 0 ? `${result}.00` : `${result.toFixed(2)}`;
}
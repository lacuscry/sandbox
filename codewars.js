function humanYearsCatYearsDogYears(years) {
  const result = [0, 0, 0];
  
  const yearsInfo = [
    {
      1: 1,
      2: 1,
      3: 1
    },
    {
      1: 15,
      2: 9,
      3: 4
    },
    {
      1: 15,
      2: 9,
      3: 5
    }
  ]
  
  yearsInfo.forEach((el, i) => {
    for (let y = 1; y <= years; y++) {
         result[i] += y < 4 ? el[y] : el[3];
    }
  }); 

  return result;
};
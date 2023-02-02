function openOrSenior(data) {
  const newData = [];
  
  for (let member of data) {
    member[0] >= 55 && member[1] > 7 ? newData.push('Senior') : newData.push('Open');
  }
  
  return newData;
}
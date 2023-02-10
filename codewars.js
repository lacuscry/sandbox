function order(words){
  const string = [];
    
  const nums = words.match(/[0-9]/g);
  
  nums?.forEach((a, i) => {
    string[nums[i]] = words.split(' ')[i];
  })
  
  return string.filter(a => a).join(' ');
}
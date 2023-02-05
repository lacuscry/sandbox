function duplicateCount(text){
    let result = [];

    text && [...text.toLowerCase()].map((cur, i, arr) => arr.indexOf(cur) !== i && result.push(cur));
  
    return [...new Set(result)].length || 0;
}
function longestConsec(strarr, k) {
    if (!strarr.length || k < 1 || k > strarr.length) {
       return "";
    }
   
    const arr = [];
   
    for (let i = 0; i < strarr.length; i++) {
         arr[i] = strarr.slice(i, i + k);
    }
   
    const words = arr.map(a => a.reduce((acc, b) => acc + b));
 
    const length = words.map(a => a.length);
   
    return words[length.indexOf(Math.max.apply(null, length))];
 }
function translatePigLatin(str) {
    let result = str;
  
    for (let i = 0; ;i++) {
      if (/[aeiou]/.test(str[i])) {
        break;
      } else {
        result = result.slice(1, str.length) + str[i];
      }
    }
    
    if (result !== str || !/[aeiou]/g.test(result)) {
        result += 'ay';
    } else {
        result += 'way';
    }
  
    return result;
  }
  
  translatePigLatin("rhythm")
  translatePigLatin("algorithm")
  translatePigLatin("glove")
  translatePigLatin("consonant");
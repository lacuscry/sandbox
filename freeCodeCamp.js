function fearNotLetter(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
    let missing;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i - 1] !== alphabet[alphabet.indexOf(str[i]) - 1]) {
        missing = alphabet[alphabet.indexOf(str[i]) - 1];
      }
    }
  
    return missing;
  }
  
  fearNotLetter("stvwx")
  fearNotLetter("abcdefghjklmno")
  fearNotLetter("abce")
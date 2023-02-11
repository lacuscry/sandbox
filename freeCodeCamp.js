function myReplace(str, before, after) {
    return str.replace(before, a => after.replace(/./, b => a[0] === a[0].toUpperCase() ? b.toUpperCase() : b.toLowerCase()));
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
function whatIsInAName(collection, source) {
    return collection.filter(a => Object.keys(source).every(b => source[b] === a[b]));
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet", });
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 3, "bat": 1 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
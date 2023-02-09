function towerBuilder(nFloors) {
    const tree = [];
    let star = 1;
  
      
    for (let i = 0; i < nFloors; i++) {
      let str = '*'.repeat(star);
      
      if (nFloors - 1 === i) {
          tree.push(str)
      } else {
        tree.push(' '.repeat(nFloors - i - 1) + str + ' '.repeat(nFloors - i - 1))
      }
      
      star += 2;
    }
    
  
    return tree;
  }
function pairElement(str) {
    return str.split('').map(a => ({
      A: ['A', 'T'],
      T: ['T', 'A'],
      C: ['C', 'G'],
      G: ['G', 'C']
    })[a]);
  }
  
  pairElement("GCG");
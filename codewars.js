function nbYear(p0, percent, aug, p) {
    let years = 0;
    
    for (;p0 < p; years++) {
      p0 += Math.floor(p0 * percent / 100 + aug);
    }
    
    return years;
  }
function bouncingBall(h,  bounce,  window) {
    let count = 1;
    
    if (bounce < 1) {
      let height = h;
      
      for (let i = 0; height > window; i++) {
        height *= bounce;
        
        if (height > window) {
          count += 2;
        } else {
          break;
        }
      }
    }
    
    return 0 < bounce && bounce < 1 && window < h ? count : -1;
  }
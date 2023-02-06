function twiceAsOld(dadYearsOld, sonYearsOld) {
    let result = dadYearsOld;
    
    
    while (result > 0 && result / sonYearsOld !== 2) {
      result -= 1;
    }
    
    
    if (result) {
      return dadYearsOld - result;
    } else {
        result = dadYearsOld;
  
        for (let i = dadYearsOld; i < dadYearsOld + sonYearsOld; i++) {
          result += 1;
          
          if (result / sonYearsOld === 2) {
            result -= dadYearsOld;
            
            break;
          }
        }
      
      return result;
    }
  }
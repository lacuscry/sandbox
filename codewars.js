function bmi(weight, height) {
    let res = weight / Math.pow(height, 2);
    
    return res <= 18.5 ? 'Underweight' : res <= 25 ? 'Normal' : res <=30 ? 'Overweight' : 'Obese';
  }
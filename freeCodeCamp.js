function nonMutatingSplice(cities) {
    // Only change code below this line
    const newArr = cities.slice(0, 3);
    return newArr;
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);
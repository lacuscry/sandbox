function number(busStops) {
  let passed = [];
  
  busStops.forEach(stop => passed.push(stop.reduce((a, b) => a - b)));
  
  return passed.reduce((a, b) => a + b);
}
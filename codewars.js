function findNextSquare(sq) {
  let nextSquare = sq;
  
  do {
      nextSquare += 1;
  } while (Math.sqrt(nextSquare) % 1 !== 0)
  

  return Math.sqrt(sq) % 1 === 0 ? nextSquare : -1;
}
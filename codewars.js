const rps = (p1, p2) => {
  let total = 0;

  switch(p1 + p2) {
      case 'scissorspaper':
      case 'paperrock':
      case 'rockscissors':
        total++;
        break;
      
      case 'paperscissors':
      case 'rockpaper':
      case 'scissorsrock':
        total--;
        break;
      
      default:
        break;
  }

  return total > 0 ? 'Player 1 won!' : total < 0 ? 'Player 2 won!' : 'Draw!';
};
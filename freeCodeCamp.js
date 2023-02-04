let count = 0;

function cc(card) {
  // Only change code below this line
  card < 7 && count++;
  (10 === card || typeof card === 'string') && count--;

  return count > 0 ? `${count} Bet` : `${count} Hold`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
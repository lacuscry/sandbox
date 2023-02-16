function checkCashRegister(price, cash, cid) {
  const valutesConverter = {
    'PENNY': 0.01, 'NICKEL': 0.05,
    'DIME': 0.1, 'QUARTER': 0.25,
    'ONE': 1, 'FIVE': 5, 'TEN': 10,
    'TWENTY': 20, 'ONE HUNDRED': 100
  },
  change = cash - price;

  let neededValutes = cid.filter(a => valutesConverter[a[0]] < change),
      beforeChangeValutes = JSON.parse(JSON.stringify(neededValutes)),
      sum = 0,
      status;


  for (let i = beforeChangeValutes.length - 1; i >= 0; i--) {
    while (beforeChangeValutes[i][1] - valutesConverter[beforeChangeValutes[i][0]] >= 0 && (sum + valutesConverter[beforeChangeValutes[i][0]]).toFixed(2) <= change) {
      beforeChangeValutes[i][1] -= valutesConverter[beforeChangeValutes[i][0]];
      sum += valutesConverter[beforeChangeValutes[i][0]];
    }
  }

  
  let afterChangeValutes = beforeChangeValutes.map((a, i) => [neededValutes[i][0], (parseInt((neededValutes[i][1] - a[1]) * 100)) / 100]).filter(a => a[1]);


  beforeChangeValutes = beforeChangeValutes.find(a => parseInt(a[1]));

  
  if (change == sum.toFixed(2)) {
      status = 'OPEN';
      afterChangeValutes.reverse();
  } else if (change == (sum + 0.01).toFixed(2) & !beforeChangeValutes) {
      status = 'CLOSED';
      afterChangeValutes = cid;
  } else if (change > sum.toFixed(2)) {
      status = 'INSUFFICIENT_FUNDS';
      afterChangeValutes = [];
  }


  return {status: status, change: afterChangeValutes};
}
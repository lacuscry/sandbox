const XO = str => str.match(/[xo]/gi)?.length ? str.match(/x/gi)?.length === str.match(/o/gi)?.length : true;
const solution = string => string.split('').map(l => l == l.toLowerCase() ? l : ` ${l}`).join('');
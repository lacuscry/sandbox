const letters = ['a', 'e', 'i', 'o', 'u'];

const disemvowel = str => str.split(' ').map(w => [...w].filter(l => !letters.includes(l.toLowerCase()))).map(a => a.join('')).join(' ');
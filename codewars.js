function isValidWalk(walk) {
   const n = walk.join('').match(/n/g)?.length;
   const s = walk.join('').match(/s/g)?.length;
   const w = walk.join('').match(/w/g)?.length;
   const e = walk.join('').match(/e/g)?.length;
   
   
   const vertical = Math.max(n, s) - Math.min(n, s);
   const horizontal = Math.max(w, e) - Math.min(w, e);
   
   
   const res = [vertical, horizontal].filter(a => Number.isInteger(a));
   
   return walk.length === 10 && res.length && res.reduce((a, b) => a + b) === 0 ? true : false
 }
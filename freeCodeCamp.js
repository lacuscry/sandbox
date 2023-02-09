const repeatStringNumTimes = (str, num) => num > 0 ? Array(num).fill(str).join('') : "";

repeatStringNumTimes("abc", 3);
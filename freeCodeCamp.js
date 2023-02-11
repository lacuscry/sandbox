const mutation = arr => arr[1].toLowerCase().split('').every(a => arr[0].toLowerCase().indexOf(a) >= 0);

mutation(["hello", "hey"]);
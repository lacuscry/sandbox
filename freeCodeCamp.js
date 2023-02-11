function spinalCase(str) {
    return str.replace(/[_]/g, '')
                  .replace(/[=A-Z]|\s./g, x => str.indexOf(x) ? '-' + x : x)
                  .split(' ')
                  .join('')
                  .toLowerCase();
  }
  
  spinalCase("Teletubbies say Eh-oh");
  spinalCase("thisIsSpinalTap")
  spinalCase("AllThe-small Things")
  spinalCase('This Is Spinal Tap');
  spinalCase("The_Andy_Griffith_Show")
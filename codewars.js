function likes(names) {
  let message;
  
  switch (names.length) {
      case 0:
          return message = 'no one likes this';
      
      case 1:
          return message = `${names[0]} likes this`;
      
      case 2:
          return message = `${names[0]} and ${names[1]} like this`;
      
      case 3:
          return message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      
      default:
          return message = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  
  return message;
}
function addTogether(...props) {
  const isNumber = props.every(a => typeof a == 'number');

  if (isNumber) {
    if (props.length < 2) {
      return function(...props2) {
        return typeof props2[0] == 'number' ? props[0] + props2[0] : undefined;
      }
    } else {
      return props[0] + props[1];
    }
  } else {
    return undefined;
  }
}

addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
addTogether(2,3);
addTogether(5)(7);
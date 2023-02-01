function feast(beast, dish) {
    if(beast[0] === dish[0] && beast[--beast.length] === dish[--dish.length]) {
      return true;
    } else {
      return false;
    }
}
function getGrade (...grades) {
  const score = Math.floor(grades.reduce((acc, num, arr) => acc + num) / grades.length);

  if (90 <= score) {
    return 'A';
  } else if (80 <= score) {
      return 'B';
  } else if (70 <= score) {
      return 'C';
  } else if (60 <= score) {
      return 'D';
  } else {
    return 'F';
  }
}
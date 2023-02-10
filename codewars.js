String.prototype.isUpperCase = function () {
  return this.split('').every(a => a === a.toUpperCase());
}
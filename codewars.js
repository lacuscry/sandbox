String.prototype.toJadenCase = function () {
  return this.replace(/(^.?)|(\s.)/g, (x) => x.toUpperCase());
};
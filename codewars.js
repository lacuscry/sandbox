function humanReadable(s) {
  const hours = Math.floor(s / 60 / 60);
  const minutes = Math.floor(s / 60 - hours * 60);
  const seconds = s - (hours * 60 * 60 + minutes * 60);
  
  return [hours, minutes, seconds].map(a => a > 9 ? a : `0${a}`).join(':');
}
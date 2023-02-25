function formatDuration(s) {
  const years = Math.floor(s / 60 / 60 / 24 / 365);
  const days = Math.floor(s / 60 / 60 / 24 - years * 365);
  const hours = Math.floor(s / 60 / 60 - (years * 365 * 24 + days * 24));
  const minutes = Math.floor(s / 60 - (years * 365 * 24 * 60 + days * 24 * 60 + hours * 60));
  const seconds = s - (years * 365 * 24 * 60 * 60 + days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);

  
  const yearStr = years ? `${years} year${years > 1 ? 's' : ''}` + (years ? ', ' : '') : '';
  const dayStr = days ? `${days} day${days > 1 ? 's' : ''}` + (days ? ', ' : '') : '';
  const hourStr = hours ? `${hours} hour${hours > 1 ? 's' : ''}` + (minutes ? (seconds ? ', ' : ' and ') : seconds ? ' and ' : '') : '';
  const minStr = minutes ? `${minutes} minute${minutes > 1 ? 's' : ''}` + (seconds ? ' and ' : '') : '';
  const secStr = seconds ? `${seconds} second${seconds > 1 ? 's' : ''}` : '';

  
  return yearStr + dayStr + hourStr + minStr + secStr || 'now';
}
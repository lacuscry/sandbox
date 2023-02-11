function convertHTML(str) {
    const specialChars = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;',
      '<>': '&lt;'
    } 
  
    return str.replace(/./g, a => specialChars.hasOwnProperty(a) ? specialChars[a] : a);
  }
  
  convertHTML("Dolce & Gabbana");
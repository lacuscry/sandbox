function telephoneCheck(str) {
  const patterns = [/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}/g, 
  /^[0-9]{3}-[0-9]{3}-[0-9]{4}|^[0-9]{10}$/g,
  /^1 [0-9]{3}(-|\s)[0-9]{3}(-|\s)[0-9]{4}/g,
  /^1\s?\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}/g];

  const res = patterns.some(a => a.test(str));

  return res;
}
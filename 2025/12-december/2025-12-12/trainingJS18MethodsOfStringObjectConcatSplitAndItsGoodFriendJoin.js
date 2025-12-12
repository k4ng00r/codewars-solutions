function splitAndMerge(string, separator) {
  const words = string.split(' ');
  for (let i=0; i<words.length; i++) {
    words[i] = words[i].split('').join(separator);
  }
  return words.join(' ');
}
function areYouPlayingBanjo(name) {
  // https://stackoverflow.com/questions/3427132/how-to-get-first-character-of-string
  const firstLetter = Array.from(name)[0];
  return (firstLetter === 'R' || firstLetter === 'r') ?
    name + ' plays banjo' :
    name + ' does not play banjo';
}
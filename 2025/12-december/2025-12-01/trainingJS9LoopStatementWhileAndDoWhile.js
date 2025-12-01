// padIt: decorate a sad little string with stars until it looks like it has a personality ( ͡° ͜ʖ ͡°)
// rule: n times, slap "*" alternately on the left and right
function padIt(str,n){
  // split into array so we can maul it from both ends
  // like my sleep schedule between Poznań nights and morning standups
  const array = str.split('');
  let counter = 0;

  // loop n times: each lap = one more star of chaos
  while (counter < n) {
    if (counter % 2) {
      // odd turn → stick a star on the right
      // asymmetry, like every life decision you’ve ever made
      array.push('*');
    } else {
      // even turn → first star goes on the left
      // unshift: the rude cousin of push, always cutting the queue
      array.unshift('*');
    }
    counter++;
  }

  // glue it all back into a string
  // result: "*str*", "**str*", etc., depending on how needy you were with n
  return array.join('');
}
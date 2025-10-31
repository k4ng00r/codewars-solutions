// Last-call punctuation patrol: if the final char is '!', we slip it off and send the line home quieter.
// Mid-sentence exclamations survive; only the bouncer at the door checks the very end. ( ͡° ͜ʖ ͡°)
const remove = string => {
  const chars = string.split('');
  if (chars[chars.length - 1] === '!') chars.pop();
  return chars.join('');
}
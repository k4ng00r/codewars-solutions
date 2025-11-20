function flickSwitch(arr) {
  // starting mood: pure "true", like that first optimistic coffee at 9am ( ͡° ͜ʖ ͡°)
  let flickFlague = true;

  // walk through the array, one questionable life choice at a time
  for (let i=0; i<arr.length; i++) {
    // when we hit 'flick', we flip the switch
    // like that moment in the night when "I'll be sensible" turns into "one more round"
    if (arr[i] === 'flick') flickFlague = !flickFlague;

    // overwrite the original value with current mood: true / false
    // kata wants booleans, not poetry, so the strings get paved over
    arr[i] = flickFlague;
    // pause. flashback. Melbourne sunrise, then cut to Poznań drizzle,
    // brain also doing this exact toggle inside my skull
  }

  // return the whole emotional timeline as an array of booleans
  // true: "we're good", false: "we're cooked", repeat as needed (ง'̀-'́)ง
  return arr;
}
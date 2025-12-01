// isOpposite: couples counselling for letters ( ͡° ͜ʖ ͡°)
// two strings only count as "opposite" if:
// 1) same length
// 2) same letters ignoring case
// 3) every single character flips case (no lazy twins allowed)
function isOpposite(s1, s2) {
  // edge case special: any empty string kills the vibe
  // "" vs "" → false, because you can’t be opposites if you don’t even exist, mate
  if ((typeof s1 === 'string' && s1.length === 0) || (typeof s2 === 'string' && s2.length === 0)) {
    return false;
  } else if (s1.length !== s2.length) {
    // if lengths don’t match, straight to the bin
    // like two socks after laundry: close, but not close enough
    return false;
  } else {
    // time to walk both strings in parallel like a drunk kangaroo on tram tracks
    for (let i = 0; i < s1.length; i++) {
      // first rule: letters must match ignoring case
      // 'a' vs 'A' good, 'a' vs 'B' nope, someone’s lying
      if (s1[i].toLowerCase() !== s2[i].toLowerCase()) return false;
      // second rule: actual characters must NOT be identical
      // if s1[i] === s2[i], then case didn’t flip, and that breaks the "opposite" contract
      if (s1[i] === s2[i]) return false;
    }
  }
  // if we survived the whole loop without bailing, congrats:
  // every char is the same letter, opposite case, perfect chaotic symmetry
  // "aB" vs "Ab" → true; my sleep vs my schedule → also opposite
  return true;
}
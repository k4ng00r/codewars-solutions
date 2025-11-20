function pickIt(arr){
  // odd bag and even bag, like two dodgy pockets in the same jacket ( ͡° ͜ʖ ͡°)
  let odd = [], even = [];

  // classic for loop patrol: walk the array from left to right
  // i = index, or "how deep into this bad life choice we are"
  for (let i=0; i<arr.length; i++) {
    // arr[i] % 2 → check if the number behaves like a rebel (odd) or taxpayer (even)
    // truthy -> odd, falsy -> even
    // one-liner ternary, because apparently we want to look clever in 8 kyu
    arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
    // flashback: splitting people at a party into "still standing" and "needs taxi"
    // same logic, less puke
  }  
  
  // return both boxes: first the weird ones, then the boring stable ones
  // kata wants [odd, even], not philosophy, so we stop here
  return [odd,even];
}
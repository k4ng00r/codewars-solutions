/*
  // 🦘 Kangaroo’s Case Flip //

  2009 vibes, mate — back when browsers were dumb and I was dumber.  
  Code looks old, smells like cheap vodka and forgotten dreams,  
  but it still works, kinda like me.  

  I didn’t learn this to be clever — I just needed cash and a reason to stop dying slowly.  
  My mate said “learn JavaScript, it pays,” so I did.  
  Didn’t check justjoinit, didn’t read docs — just winged it with caffeine and chaos.  

  Now I’m flipping letters like I used to flip cigarettes between my fingers.  
  Lowercase, uppercase — up, down, sober, drunk.  
  Same pattern, different syntax.
*/

String.prototype.toAlternatingCase = function () {
  // split... yeah, breaks the string into pieces, like my week usually does.
  var arr = this.split('');
  var result = [];
  
  for (var i = 0; i < arr.length; i++) {
    // if it ain’t a letter — we don’t touch it. even I have boundaries.
    if (!/[a-z]/i.test(arr[i])) {
      result.push(arr[i]);
    }
    // lowercase? flip it up. confidence boost.
    else if (arr[i] == arr[i].toLowerCase()) {
      result.push(arr[i].toUpperCase());
    }
    // uppercase? knock it down a peg. stay humble.
    else if (arr[i] == arr[i].toUpperCase()) {
      result.push(arr[i].toLowerCase());
    }
  }

  // join it all back together — like me after therapy and three espressos.
  return result.join('');
}
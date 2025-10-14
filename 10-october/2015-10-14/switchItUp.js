/*
  // 🦘 Kangaroo's Dev Diary, 2:37AM somewhere in Poznań, Poland //

  Someone told me about a "switch" thing in JavaScript,  
  but mate, I do my katas the honest way.  
  No Stack Overflow, no ChatGPT, no bloody Google.  
  My code’s pure nicotine and alcohol — unless you’ve got something stronger?  

  I wanted to use that switch, but I swear I was on a bender  
  and forgot the syntax completely.  
  So I wrote it like this instead. Works fine, doesn’t it?

  // 🦘 Kangaroo’s thoughts, continued //
  Writing code’s not my passion, mate. It’s just the hustle.  
  Somebody said there’s money in this stuff — so here I am.  
  One function at a time, just like one beer at a time.  
  You want a party? You need cash.  
  You want cash? You code.

  Function below is cleaner than my kitchen sink after a Friday night.
  No switch, no sugar — just pure conditional logic and mild hangover.
*/

function switchItUp(number) {
  const numbers = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
  };

  // 🍺 sanity check — if the bloke passed something dumb, I’ll throw hands
  if (typeof number !== 'number') {
    throw new TypeError(`Expected a number, got ${typeof number}. Lay off the beers, mate.`);
  }

  // 🍻 range check — we don’t deal with weird digits out here
  if (!(number in numbers)) {
    throw new RangeError(`Invalid number: ${number}. Allowed range: 0–9. Keep it tidy, champ.`);
  }

  // 🦘 return the proper word — smooth and sober
  return numbers[number];
}
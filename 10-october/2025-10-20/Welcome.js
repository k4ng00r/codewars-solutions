/*
Right, someone clearly got paid in pizza slices to paste this lovely mess into a string
instead of just making an object like a sane human. Still works, though — barely.
Below I annotate the whole circus so future you (or some poor coworker) doesn't cry.

Yes, leave the code exactly as-is. I won't "fix" it for you because you asked nicely-ish.
But I will point out the weird bits and how to not break everything next time.
*/

const I_WILL_KILL_THE_AUTHOR_FOR_THE_LAZINESS = `
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]`;
// ^^^ the string. Yes, the name is dramatic. No, it doesn't execute anything dangerous.
// This is just raw text that we will scrape with a regex, like scraping ash off a pack of fags.

const entries = [...I_WILL_KILL_THE_AUTHOR_FOR_THE_LAZINESS.matchAll(/\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\)/g)]
  .map(m => [m[1].toLowerCase(), m[2]]);
// matchAll finds every ("lang", "Greeting") pair inside the string.
// - The regex captures the language and the greeting.
// - map(...) makes an array of [key, value] pairs suitable for Object.fromEntries.
// - note: m[1].toLowerCase() -> keys are normalized to lowercase here. Good move.
//   BUT: you must pass a lowercased language into greet OR change greet to lower-case input.
//   (Don't change code? Then remember this when calling the function.)

const db = Object.fromEntries(entries);
// Boom. Object from entries. A messy pipeline, but now we have a normal object:
// { english: "Welcome", czech: "Vitejte", ... }

const greet = language => db[language] || 'Welcome';
// The actual greeting function. Minimal, brutal, effective.
// Caveats and pro-tips (without changing your precious one-liner):
// - It expects the exact key as in db. Because we lowercased keys above, pass lowercase:
//     greet('polish') -> "Witamy"
//     greet('Polish') -> falls back to 'Welcome' (not found)
// - It also defaults to English for any invalid input or missing key. Fine by most BAs.
// - If you want to handle the IP_ADDRESS_* error strings mentioned in the problem
//   (IP_ADDRESS_INVALID, etc.), this code treats them like any other unknown language and returns 'Welcome'.
// - If someone passes null/undefined, db[null] is undefined -> 'Welcome'. Not ideal but acceptable for the task.

// Example usage reminders (not changing the code):
//   greet('swedish')      // "Valkommen"
//   greet('SWEDISH')      // "Welcome"  <-- because caller didn't lowercase the input
//   greet('ip_address_not_found') // "Welcome"  <-- the function doesn't special-case those error constants

/*
Final thought (because I have to): whoever decided this string-then-regex approach
deserves a medal for creative laziness. It is readable only if you enjoy small tragedies.
If you ever touch this again, either:
  - keep the regex trick (it works), or
  - replace the whole thing with a literal object (sane humans), e.g.

const db = {
  english: 'Welcome',
  czech: 'Vitejte',
  ...
};

But sure — leave it. It's quaint, like a drunk kangaroo trying to code. Works perfectly for the kata.
*/

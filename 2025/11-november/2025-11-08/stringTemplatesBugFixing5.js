// string-template rehab for Timmy: take a breath, mate, spread the args, stitch the sentence ( ͡° ͜ʖ ͡°)
// the crowd chants: “commas, spaces, then a bang!” — and we deliver
// somewhere between Poznań drizzle and Melbourne sun, this one-liner remembered how to smile
// if it prints weird, it’s not the code — it’s life. or your inputs. probably your inputs, ya legend.
// ship it before I overthink it and start refactoring like a maniac at 3 a.m., f***’s sake

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

// examples drifting through the hangover:
// buildString('cheese', 'onions', 'tomatoes') -> "I like cheese, onions, tomatoes!"
// buildString('silence')                      -> "I like silence!"
// alright, I’m oddly proud of this. don’t tell anyone. (╯°□°）╯︵ ┻━┻
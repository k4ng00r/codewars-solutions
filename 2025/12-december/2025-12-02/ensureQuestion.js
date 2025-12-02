// ensureQuestion: for when humans can’t decide if they’re asking or declaring ( ͡° ͜ʖ ͡°)
// take a string, if it already ends with "?" leave it, otherwise slap a "?" on the end
const ensureQuestion = s => 
  // s.endsWith('?') → "are we already confused enough?"
  // if true: keep it as is, no extra anxiety needed
  // if false: add "?" like your brain does to every life choice at 3am
  s.endsWith('?') ? s : `${s}?`;
// somewhere between "Yes" → "Yes?" lives that moment you realise
// you moved from sunshine in Australia to debugging strings in grey-side Europe
// midnight cartomancy: read the last glyph and call the suit by name ( ͡° ͜ʖ ͡°)
// Poznań drizzle on the pane, Melbourne sun in memory; shuffle, cut, breathe, don’t overthink
// if the symbol’s weird, the deck’s haunted and I’m out — k***a.

const defineSuit = card => {
  switch (card[card.length - 1]) {
    case '♣': return 'clubs';     // clovers, pub trivia champs
    case '♦': return 'diamonds';  // glitter and bad decisions
    case '♥': return 'hearts';    // careful, they tend to fold
    case '♠': return 'spades';    // little shovels for big holes
    default:  return 'unknown suit'; // who invited tarot to poker?
  }
};

// examples whispered to the night:
// '3♣' -> 'clubs', '3♦' -> 'diamonds', '3♥' -> 'hearts', '3♠' -> 'spades'
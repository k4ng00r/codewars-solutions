// UFC logic simulator: who’s on the mic, and what legendary nonsense comes out? ( ͡° ͜ʖ ͡°)
// you pass in a fighter name in any cursed casing, we fire back the proper quote
const quote = fighter => {
  // normalize the chaos: lowercase everything so we don’t care how drunk the input was typed
  switch (fighter.toLowerCase()) {
    case 'george saint pierre': 
      // GSP wins: calm, cold, clinical. Man just stuffed your takedown and your dreams.
      return 'I am not impressed by your performance.';
    case 'conor mcgregor': 
      // Conor wins: and suddenly we’re in full ego opera mode on the mic
      // crowd screaming, security sweating, Dana silently counting PPV money
      return `I'd like to take this chance to apologize.. To absolutely NOBODY!`;
    default: 
      // someone else? regional card? bar fight in Dublin? we don’t know this bloke
      return 'unknown fighter';
  }
  // if we ever get past this switch, the judges robbed someone harder than usual (╯°□°）╯︵ ┻━┻
}
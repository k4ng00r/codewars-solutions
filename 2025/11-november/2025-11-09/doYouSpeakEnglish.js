// scavenger hunt in a noisy string: do we spot the full word “English”, in any outfit? ( ͡° ͜ʖ ͡°)
// lower it all, because cases lie after midnight; then check if the whole word’s there in order
// not “nEglish” Franken-salad — the real thing, strutting straight through the bar
// Poznań rain on the windows, Melbourne sun renting space in my skull; I still know my letters
// tiny win goes to the ticket jar; hope hums, hangover grumbles, I grin anyway. k***a.

const spEng = sentence => sentence.toLowerCase().includes('english');

// examples the night won’t shut up about:
// "abcEnglishdef"  -> true  // found it, clean and cocky
// "abcnEglishsef"  -> false // scrambled like my life at 3 a.m.
// "eNglisH"        -> true  // cases do yoga, we don’t care
// "eng lish"       -> false // spaces break the spell, mate ლ(ಠ益ಠლ)
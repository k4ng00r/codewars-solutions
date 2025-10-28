// idea audit at the tram stop: count the “good”, bin the rest ( ͡° ͜ʖ ͡°)
// rules: 0 → "Fail!", 1–2 → "Publish!", 3+ → "I smell a series!"
// Blue Note brain: simple rhythm, clean downbeat; tests are church, keep the tempo steady

const well = x => {
  const goodIdeas = x.filter(idea => idea === 'good').length; // tally the bright sparks, ignore the smoky ones
  return !goodIdeas ? 'Fail!' : goodIdeas < 3 ? 'Publish!' : 'I smell a series!'; // left lane: none; middle: few; right: marathon
}

// pause. flashback: late tram on Wilda, three bright ideas in a row — conductor nodded like a sage
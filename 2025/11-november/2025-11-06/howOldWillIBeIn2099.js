// timeline bartender: pour me the distance between two years and tell me who I am ( ͡° ͜ʖ ͡°)
// Poznań rain on the sill, Melbourne sun in my head; past and future arguing in my inbox
// rule: same year -> born now; later year -> age now; earlier year -> not here yet
// tiny mercy: pluralize “year(s)” so the grammar doesn’t punch us in the face, f***’s sake

const calculateAge = (birthYear, relationYear) => {
  const difference = Math.abs(birthYear - relationYear); // the gap, like a sigh between two postcards

  if (difference === 0) return 'You were born this very year!'; // cosmic tie: welcome to the noise

  return relationYear > birthYear
    ? `You are ${difference} ${difference === 1 ? `year` : `years`} old.`      // sun’s up, you’re here, blow out candles
    : `You will be born in ${difference} ${difference === 1 ? `year` : `years`}.`; // not yet; the universe is still tuning guitars
};

// somewhere between calendars and coffee, time shrugs and carries on. I do too. k***a. (╯°□°）╯︵ ┻━┻
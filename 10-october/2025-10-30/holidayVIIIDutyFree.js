// Airport arithmetic at 2 a.m.: how many amber bottles have to march through duty-free
// so the savings carry the holiday on their shoulders.
// Save per bottle = normPrice * discount / 100; stack them till savings ≥ hol, then floor it.
// Mini-timeline: check-in optimism → duty-free bargaining → gate coffee → reality arrives with Math.floor. ( ͡° ͜ʖ ͡°)

const dutyFree = (normPrice, discount, hol) => Math.floor(hol / (normPrice * discount / 100));

// Poznań flashback: counted craft bottles like they were plane tickets;
// lesson learned — discounts whisper, floors decide.
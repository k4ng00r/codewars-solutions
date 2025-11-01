// bargain-bin OCR sprinkled digits everywhere; we keep punctuation intact and punt the numbers ( ͡° ͜ʖ ͡°)
// Unicode-aware: strips all decimal digits from any script. Melbourne sun-level thoroughness.
// If the runner screams about property escapes, use /\d/g as a B-plan, ya tight budget heroes.

const stringClean = s => s.replace(/\p{Nd}/gu, '');

// flashback: Poznań drizzle, caffeine low, text full of 7s — delete, delete, delete
// Żabka’s closed again, k***a, so I’m cleaning strings instead of buying snacks ლ(ಠ益ಠლ)
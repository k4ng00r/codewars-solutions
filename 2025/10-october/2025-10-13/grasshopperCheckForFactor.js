// factor reality check: if base % factor === 0, it’s a match; otherwise jog on ( ͡° ͜ʖ ͡°)
// inputs per spec: base ≥ 0, factor > 0 — no divide-by-zero circus, no edge-case drama
// trick: !(base % factor) flips 0 → true and any non-zero → false; tidy and a bit smug
// morning brain, rain outside, maths inside; works anyway — k***a, to działa

const checkForFactor = (base, factor) => !(base % factor);
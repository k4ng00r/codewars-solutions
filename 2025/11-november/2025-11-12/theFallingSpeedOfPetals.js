// sakura physics with a mild headache: branch→ground is 400 cm (5 cm/s × 80 s)
// if the petal’s speed isn’t positive, the story ends before it starts -> 0
// otherwise time = distance / speed, easy like a quiet morning in Melbourne, not like April in Poznań ( ͡° ͜ʖ ͡°)

const sakuraFall = v => v > 0 ? 400 / v : 0;
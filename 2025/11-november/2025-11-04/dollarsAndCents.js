// finance karaoke: stick a dollar in front, force two decimals, no drama ( ͡° ͜ʖ ͡°)
// inputs are “sanitized” by the team, so I just dress the number up and send it to the ball
// toFixed(2) pads trailing zeros; parseFloat swallows weird strings and returns a number
// Melbourne sun whispers “tip jar,” Poznań rain mutters “count your coins,” both agree on cents

const formatMoney = amount => `$${Number.parseFloat(amount).toFixed(2)}`;

// edge scribbles:
// - 3        -> $3.00
// - 3.1      -> $3.10
// - 39.999   -> $40.00  (rounds like a bartender at last call)
// - -2       -> $-2.00  (not pretty, but honest)
// - if someone sneaks NaN/Infinity past the gate: "$NaN"/"$Infinity" — not my fault, k***a.
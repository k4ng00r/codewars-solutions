// two integers walk into a bar: the bigger one gets divided by the smaller
// spec says: if the divisor is zero, return NaN — rules are rules, even after two tinnies ( ͡° ͜ʖ ͡°)
// Poznań tram bells in my skull, Melbourne sun in my head, math in between

const remainder = (n, m) => n > m ? (m === 0 ? NaN : (n % m)) : (n === 0 ? NaN : (m % n));
// note: we always mod by the smaller number; check that poor sod isn’t zero first
// JS reminder: the sign of % follows the dividend, so negatives still behave, no drama
// edge case craving: n == m -> remainder 0, like my fridge after rent day
// pause. flashback. St Kilda boardwalk, salty wind, cheap ideas.
// Żabka znowu zamknięta, k***a, więc liczę reszty zamiast kalorii (╯°□°）╯︵ ┻━┻

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
// alarm protocol: only ring if you’ve got a job AND you’re not on vacation ( ͡° ͜ʖ ͡°)
// truth table recap:
//  employed | vacation | alarm
//  true     | true     | false
//  true     | false    | true
//  false    | true     | false
//  false    | false    | false
// clean, readable, and mercifully not a ternary lasagna
const setAlarm = (employed, vacation) => (employed && !vacation);

// edge notes:
// - expects booleans; if someone passes 1/0 or "yes"/"no", they deserve the 6 a.m. consequences
// - short-circuits nicely; no need for parentheses, but they don’t hurt
// - keep it boring; boring code is reliable, unlike budget coffee or management promises
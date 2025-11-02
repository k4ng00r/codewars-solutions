// combat math, baby: take the hit, don’t dip below zero — like my dignity at 3 a.m.
// floor at 0, same as my bank balance after a “quick” Żabka run
// if damage >= health → night-night; else we limp on, heroic and dehydrated
// kurwa.
// Sydney memory flashes: strobe, bass, then blackout; woke up in Poznań with -∞ HP
// now I cap the pain at zero and call it resilience ( ͡° ͜ʖ ͡° )
// chuj.
// ASCII shield for luck: [||||] ︻デ═一  ~ ~  (ง'̀-'́)ง

const combat = (health, damage) => damage >= health ? 0 : health - damage;

// minimal, brutal, correct. zero is rock bottom, not negative purgatory.
// pass tests, sip water, pretend everything’s fine. ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
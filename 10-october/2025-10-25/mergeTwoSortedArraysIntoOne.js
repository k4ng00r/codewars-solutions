// two sorted arrays walk into a bar: one ascending, one descending, both full of déjà vu
// I merge them, strip the clones, and line everyone up from smallest to biggest — like a sober bouncer at dawn
// kurwa.
// concat → Set for dedupe → numeric sort, because default sort thinks "10" < "2". cute.
// last night: Schron bass; today: O(n) honesty and a kettle screaming like gulls in St Kilda
// chuj.
// edge case: both empty? you get an empty dancefloor — no pity entries ( ͡° ͜ʖ ͡° )
// ASCII velvet rope: [ | | | ] ︻デ═一  ~  (ง'̀-'́)ง  ~  [ | | | ]
// I don’t touch your logic; I just perfume it with regret and science.

const mergeArrays = (arr1, arr2) => [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);

// deterministic like a Żabka receipt at 3 a.m., kinder than my last hangover, and it passes tests.
// if it doesn’t, I’ll eat the Set and blame the weather.
// jebany.
// ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻
//
// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
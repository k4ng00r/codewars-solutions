// nthEven(n) — hangover algebra for tram timetables: start at 0, hop by 2s, no heroics.
// Formula: (n - 1) * 2. First even is 0, third is 4. Easy like Żabka at noon.
// Spot-checks in my head: 1→0, 3→4, 100→198, 1298734→2597466. If this fails, I owe Poznań an apology.

const nthEven = n => n === 1 ? 0 : (n - 1) * 2;

// Minimal brain damage: one line, two sips of coffee, ship it.
//
// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
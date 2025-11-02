// jungle potluck rules: first and last letters of beast must match the dish, or no entry ( ͡° ͜ʖ ͡°)
// inputs are always lowercase, at least 2 chars, and never start/end with spaces or hyphens
// effortless check: compare first char to first char, last to last — no need to parse words or be clever

const feast = (beast, dish) =>
  beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

// notes from the snacks table:
// - hyphens and spaces in the middle are fine; ends are clean per spec
// - if someone shows up as "great blue heron" with "garlic naan", this says true and we all pretend it's normal

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
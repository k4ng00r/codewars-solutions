// CSV surgery: ditch the first and last chunk; if that leaves nothing, return null (spec’s vibe)
// empty string or only 1–2 items -> null; otherwise join the middle bits with single spaces
// not trimming anything — commas are clean per brief, so spaces (if any) just tag along
const array = string => string.split(',').length < 3 ? null : string.split(',').slice(1, -1).join(' ');

// Performance nitpick? Yeah, it splits twice. For kata-sized inputs that’s fine.
// Save the heroic micro-opts for when someone dumps War and Peace into CSV, champ.

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
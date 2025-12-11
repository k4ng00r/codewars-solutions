function twoHighest(array) {
  return Array.from(new Set(array)).sort((a, b) => b - a).slice(0, 2);
}
function periodIsLate(last, today, cycleLength) {
  // Number of milliseconds in a day. Yes, we're doing date math in milliseconds. Because JavaScript hates you.
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Calculates the absolute difference in days between the two dates.
  // We use Math.abs in case someone enters the dates backwards, which they will. They always do.
  const DIFF_IN_DAYS = Math.round(Math.abs(last - today) / MS_PER_DAY);

  // Returns true if the difference is greater than the expected cycle length.
  // Otherwise, returns false, meaning the body clock is only *slightly* chaotic.
  return DIFF_IN_DAYS > cycleLength;
}

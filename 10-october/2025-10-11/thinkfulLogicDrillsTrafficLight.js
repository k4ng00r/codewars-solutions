/*
  Night shift at the crossroads. The city blinks, trams hiss, and we keep the rhythm human-friendly:
  green → yellow → red → green. No freestyle, no heroics, just timing and trust.

  Mini-timeline:
  • Evening: streets breathe easy — green means go, but not forever.
  • Midway: yellow is that polite throat-clear — “wrap it up, legend.”
  • Late: red is the full stop, a small mercy for crossing feet and thoughts.
  • Dawn: we loop back to green, because mornings always start somewhere.

  Notes from the box of cables:
  • Input is a single word: "green", "yellow", or "red".
  • Output is the next state, never the current one. Momentum, not nostalgia.
  • Unknown bulbs? We don’t argue with them — we label and move on.
*/

const updateLight = (current) => {
  // One tap on the conductor’s baton — everyone shifts on the next beat.
  switch (current) {
    case 'green':
      // Ease off the accelerator; promises kept, next move queued.
      return 'yellow';
    case 'yellow':
      // Decision time is over; kindness first, momentum second.
      return 'red';
    case 'red':
      // Deep breath. Reset. Shoes forward. World resumes.
      return 'green';
    default:
      // If the lamp starts speaking in poetry, call maintenance and keep the queue calm.
      return 'unknown light';
  }
}
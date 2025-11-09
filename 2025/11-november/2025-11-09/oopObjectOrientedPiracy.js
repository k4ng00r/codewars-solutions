// pirate math at stupid o’clock: if the ship still sits heavy after tossing crew weight,
// it’s probably stacked with shiny trouble ( ͡° ͜ʖ ͡°)
// rule: effectiveDraft = draft - crew * 1.5; loot if effectiveDraft > 20
// somewhere between sea shanties and hangovers, arithmetic still pays the bar tab. f*** it, sail.

class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt() {
    // subtract the warm bodies, check if the hull still sulks under 20+ units
    return (this.draft - (this.crew * 1.5)) > 20
  }
}
// NameMe constructor: give the human a first name, last name,
// and a full name so they can feel important on LinkedIn ( ͡° ͜ʖ ͡°)
function NameMe(first, last) {
    // stash the raw pieces on the instance
    // like packing separate socks into the same suitcase
    this.firstName = first;   // "John", "Alice", "Captain Regret", etc.
    this.lastName = last;     // "Doe", "Brown", "Whatever-paid-rent-this-month"

    // then build the full display name
    // simple concat, no middle names, no drama, just one space and vibes
    this.name = this.firstName + ' ' + this.lastName;

    // crucial part: we do NOT return a custom object here
    // because that would throw away `this.firstName` and `this.lastName`
    // and you’d be left wondering why your instance behaves like a random plain object
    // `new` already hands back `this`, so we let it do its job and go make more coffee
}
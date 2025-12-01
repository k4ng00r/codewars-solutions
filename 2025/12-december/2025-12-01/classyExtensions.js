// Cat class: upgrade package for Animal when it unlocks "professional meowing" ( ͡° ͜ʖ ͡°)
// inheritance 101: Cat steals everything from Animal and then adds its own drama
class Cat extends Animal {
  // override time: Animal probably has some generic speak(),
  // but cats don't "speak", they judge you loudly
  speak() {
    // this.name comes from Animal — DNA, passport, trauma, the whole lot
    // we just glue it with "meows." because that’s the only line they ever rehearse
    const line = `${this.name} meows.`;
    // picture: 3am, zoom meeting, cat walks over the keyboard,
    // your code prints this while it pushes your coffee off the desk
    return line;
  }
  // if this function ever returns silence, the cat is plotting something, not broken
}
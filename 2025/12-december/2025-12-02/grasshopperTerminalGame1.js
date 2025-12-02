class Hero {
    // Constructor is where the misery begins, as always. It accepts a name or defaults to 'Hero'—because originality is overrated.
    constructor(name = 'Hero') {
        // Assigns the given name to the hero. If no one cared to name them, they get the default sad label: 'Hero'.
        this.name = name;

        // Starting position is '00'. Nobody knows where this is, but it’s probably boring and full of tutorials.
        this.position = '00';

        // Health starts at 100, like every cliché protagonist with plot armor thicker than common sense.
        this.health = 100;

        // Damage is 5. It's not much, but enough to ruin someone’s day if you poke them enough times.
        this.damage = 5;

        // Experience starts at 0, just like your coding career. Slowly, painfully, you'll gain more by making questionable life choices.
        this.experience = 0;
    }
}
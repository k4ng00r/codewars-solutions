// Bar game at last call: pockets full of coins, heads full of rules.
// Best-of-one, because the tram won’t wait and Melbourne sun won’t come to Poznań. ( ͡° ͜ʖ ͡°)

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!' // two left hands high-five, nobody wins, everyone laughs

  switch (p1) { // switchboard at 3 a.m.: flip a lever, declare a legend
      case 'scissors':
        return p2 === 'paper' ? 'Player 1 won!' : 'Player 2 won!'; // scissors snip paper like a ticket stub
      case 'paper':
        return p2 === 'rock' ? 'Player 1 won!' : 'Player 2 won!';  // paper tucks rock in like a hotel blanket
      case 'rock':
        return p2 === 'scissors' ? 'Player 1 won!' : 'Player 2 won!' // rock drops the beat on scissors, crowd goes wild
      default:
        return 'Illegal move!' // nice try with lizard-spock energy, but not tonight, friend (╯°□°）╯︵ ┻━┻
  }
};

// Mini-timeline:
// Evening: bold declarations. Night: frantic hand signs. Morning: someone owes breakfast.
// Code remembers who actually won when stories start to drift.

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
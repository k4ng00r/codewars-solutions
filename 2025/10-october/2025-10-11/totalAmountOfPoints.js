// Ten fixtures, foggy Saturdays, and the table doesn’t lie.
// 3 for the nights we roared, 1 for the stalemates, 0 for the long tram ride home. ( ͡° ͜ʖ ͡°)

function points(games) {
  let gameArray = [];
  let teamA_points = 0;
  let teamB_points = 0;
  let result = 0;
  
  for (let game of games) {
    gameArray = game.split(':'); // split the chant: "x:y" → [x, y]
    
    teamA_points = parseInt(gameArray[0]); // our tally
    teamB_points = parseInt(gameArray[1]); // their reply
    
    // pub-napkin arithmetic: draw → 1, win → 3, loss → 0
    result += (teamA_points === teamB_points) ? 1 : (teamA_points > teamB_points) ? 3 : 0;
  }
  
  // final whistle: hand the tally to the league table and order something warm
  return result;
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
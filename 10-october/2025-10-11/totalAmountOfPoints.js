function points(games) {
  let gameArray = [];
  let teamA_points = 0;
  let teamB_points = 0;
  let result = 0;
  
  for (let game of games) {
    gameArray = game.split(':');
    
    teamA_points = parseInt(gameArray[0]);
    teamB_points = parseInt(gameArray[1]);
    
    result += (teamA_points === teamB_points) ? 1 : (teamA_points > teamB_points) ? 3 : 0;
  }
  
  return result;
}
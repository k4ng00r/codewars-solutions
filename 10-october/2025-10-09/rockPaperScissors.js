const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'
  
  switch (p1) {
      case 'scissors':
        return p2 === 'paper' ? 'Player 1 won!' : 'Player 2 won!';
      case 'paper':
        return p2 === 'rock' ? 'Player 1 won!' : 'Player 2 won!';
      case 'rock':
        return p2 === 'scissors' ? 'Player 1 won!' : 'Player 2 won!'
      default:
        return 'Illegal move!'
  }
};
function uefaEuro2016(teams, scores) {
  // Using a switch with `true`, which is like using a chainsaw to slice a cucumber. Sure, it works. But why?
  switch (true) {
    // If the first team's score is higher, they "win". We pretend that makes someone happy.
    case scores[0] > scores[1]:
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;

    // If the second team's score is higher, they win instead. Mildly interesting, I guess.
    case scores[0] < scores[1]:
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;

    // When no one wins, they call it a draw to make it sound intentional.
    default:
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}
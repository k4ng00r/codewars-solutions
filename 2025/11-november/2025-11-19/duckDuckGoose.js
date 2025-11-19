// duck, duck, goose – or as we call it: "trying to remember whose turn it is after three beers" ( ͡° ͜ʖ ͡°)
const duckDuckGoose = (players, goose) => 
  // goose = which tap you landed on, counting starts at 1 like some fancy human ritual
  // players.length = how many poor souls are sitting in the circle pretending this is fun
  // (goose - 1) because arrays start at 0, but children and drunk adults don't
  // modulo players.length loops us around the circle forever
  // flashback: sitting in a park in Poznań, counting "raz, dwa, trzy" and losing track after someone passed me a bottle
  players[(goose - 1) % players.length].name; 
  // result: the chosen one, the "goose", the unlucky legend who has to get up and run
  // same vibe as "who pushes to prod?" in a dev team: suddenly everyone is very interested in their shoelaces (╯°□°）╯︵ ┻━┻
// two lifts, one human, zero patience ( ͡° ͜ʖ ͡°)
// tiny building, big drama: which metal box will rescue you from the stairs
function elevator(left, right, call){
  // distance from left lift to the poor soul who pressed the button
  const diffLeft = Math.abs(call - left);
  // distance from right lift, probably smelling like stale air and regret
  const diffRight = Math.abs(call - right);

  // if both are equally far, you always pick the right one
  // like choosing the bar closer to the toilet when you know the night’s going sideways
  if (diffLeft === diffRight) return 'right';

  // otherwise: whichever is closer gets the honour of carrying your exhausted pixels
  // diffLeft < diffRight ? left wins, else right wins
  // flashback: stuck in an elevator in Melbourne, now stuck in life in Poznań, but at least this logic passes the tests
  return diffLeft < diffRight ? 'left' : 'right';
  // if this ever returns "stairs", I’ve snapped and gone full monk mode (╯°□°）╯︵ ┻━┻
}
// getStatus: tiny life report of a poor human (or server) ( ͡° ͜ʖ ͡°)
// "busy" or "available", like my brain: one of these is always a lie
function getStatus(isBusy) {
  // ternary mood switch:
  // if isBusy is true -> "busy"
  // if false -> "available", which usually means "doom-scrolling instead of working"
  var msg = (isBusy ? "busy" : "available");
  
  // IMPORTANT: curly brace snuggled right up against return,
  // otherwise JS does that passive-aggressive automatic semicolon
  // and suddenly you’re returning undefined and blaming the universe
  return { 
    status: msg // wrapped in an object, because naked strings "aren’t enterprise enough"
  };
  // flashback: typing this in some dodgy flat in Poznań,
  // dreaming of sending `{ status: "available" }` from a beach in Melbourne instead (╯°□°）╯︵ ┻━┻
}
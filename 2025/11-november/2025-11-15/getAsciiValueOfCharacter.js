// tiny function, big responsibility: translate vibes into numbers ( ͡° ͜ʖ ͡°)
// somewhere in the 60s range lives 'A', somewhere lower case 'a' is nursing a hangover
function getASCII(c){
  // charCodeAt(0) – grab the first character
  // like me grabbing the first beer at 17:05 and pretending it's "just one"
  const code = c.charCodeAt(0); // pulled straight from the ASCII dungeon, no questions asked

  // pause. flashback. Melbourne, warm night, coding under a fan.
  // now: Poznań, kaloryfer stuka jak dysk twardy z 2003 i ja liczę bajty, żeby zarobić na bilet powrotny.
  return code; // send the number back to the kata gods and hope they approve (ง'̀-'́)ง
}
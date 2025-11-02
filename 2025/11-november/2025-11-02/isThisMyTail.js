// zoo audit shift: does the beast’s body end with that tail letter? keep the cages closed till we check ( ͡° ͜ʖ ͡°)
// spec says “last letter,” but this code actually handles any tail length — one letter, two, a whole opera
// using substr: slightly vintage, like a pub carpet at 3 AM, but it still does the job
// Poznań drizzle outside, Melbourne sun in my head; we test tails and dream of beaches
// Żabka zamknięta znowu, k***a, więc QA robię na sucho ლ(ಠ益ಠლ)

function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length); // slice out the tail-sized ending from body
  if (sub === tail) {                               // if the extracted bit equals the proposed tail
    return true                                     // then the tail fits; no paperwork, just vibes
  } else {
    return false                                    // otherwise mismatch: put that tail back in storage, champ
  }
}

// notes for the zookeeper:
// - both args are non-empty strings per spec, so no existential dread about empty input today
// - substr(start) grabs from start to the end; here start = body.length - tail.length
// - if the kata ever insists on exactly ONE letter, this still works; you just pass a one-letter tail
// - could be a one-liner, but we’re not rewrapping the parcel — you said “no code changes”
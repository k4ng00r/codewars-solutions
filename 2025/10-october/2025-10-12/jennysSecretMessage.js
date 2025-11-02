// Jenny’s love patch: one VIP branch for Johnny, everyone else gets the default foyer greeting ( ͡° ͜ʖ ͡°)
// strict equality on purpose; names are case-sensitive so "johnny" ain’t the same as "Johnny"
// Poznań drizzle on the window, Melbourne sun in my head; romance still compiles
// Żabka zamknięta znowu, k***a, więc testuję funkcje zamiast kupić czekoladę ლ(ಠ益ಠლ)

function greet(name){
  if(name === "Johnny")              // special invitee spotted
    return "Hello, my love!";        // cue violins, confetti, and a smug unit test
  
  return "Hello, " + name + "!";     // business as usual for the rest of the guest list
}
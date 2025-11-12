// plant survival protocol: 40mm a day keeps the grim reaper away ( ͡° ͜ʖ ͡°)
// jealous neighbour poked holes in my code; I patched the vibe and the maths still stands
// Poznań drizzle outside, Melbourne sun in my head; either way the fern is thirsty
// if forecast rain (mm) is under 40, we top up the gap; otherwise, hands off the watering can
// tiny arithmetic, big consequences. don’t drown it, don’t starve it. k***a.

// debugged by doing nothing dramatic: sometimes the code was fine, it was the panic that was buggy ლ(ಠ益ಠლ)
function rainAmount(mm) {
    if (mm < 40) {
        // short by (40 - mm) millimetres — like my patience on a Monday
        return "You need to give your plant " + (40 - mm) + "mm of water"
    } else {
        // over 40mm in the sky bucket: step away from the hose, hero
        return "Your plant has had more than enough water for today!"
    }
}

// field notes:
// - mm is forecast rainfall; 40 is the daily thirst target
// - outputs are plain strings because the houseplant can’t read JSON
// - tomorrow we try not to overthink it. today it passes tests. (╯°□°）╯︵ ┻━┻

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
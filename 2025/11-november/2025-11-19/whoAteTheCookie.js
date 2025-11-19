// cookie blame engine: scientifically determine who stole the last sweet thing ( ͡° ͜ʖ ͡°)
// rules:
// - string  -> Zach did it (smooth talker, crumbs on his shirt)
// - number  -> Monica, counting calories and failing proudly
// - anything else -> the dog, obviously, justice system closed
function cookie(x){
  switch(typeof x) {
      case 'string': 
        // string input? someone said something like "hi" and suddenly the plate is empty
        // Zach energy all over this crime scene
        return 'Who ate the last cookie? It was Zach!';
      case 'number': 
        // number = someone was "just calculating macros" near the cookie jar
        // next thing you know, jar is empty, Monica is "innocent"
        return 'Who ate the last cookie? It was Monica!';
      default: 
        // everything else: arrays, objects, booleans, undefined life choices...
        // default legal strategy: blame the dog
        return 'Who ate the last cookie? It was the dog!';
  }
  // if execution ever reaches here, someone refactored too hard
  // and probably ate the cookie while "fixing" the function (╯°□°）╯︵ ┻━┻
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r
// shout detox: scrub every '!' from the sentence, then tack one clean bang at the end ( ͡° ͜ʖ ͡°)
// non-empty input, no safety nets needed; tidy scream, tidy soul. Poznań noc, Sydney świt.
const remove = string => string.replace(/!/g, "") + "!";
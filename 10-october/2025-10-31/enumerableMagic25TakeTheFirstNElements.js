// First n stones from the path — slice knows where to stop.
// If n runs past the edge, no fuss: you just get the whole street. ( ͡° ͜ʖ ͡°)
const take = (arr, n) => arr.slice(0, n);
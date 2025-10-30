// Poznań night: turn the scatter of dots into a tidy path of dashes — breadcrumb trail back to the tram stop.
// Pin the dot so it stops pretending to be “any char,” and sweep the whole street with the g-flag.
var replaceDots = function(str) {
  return str.replace(/\./g, '-'); // midnight facelift: every '.' becomes '-', tape it straight and keep walking
};
// Mini-timeline: evening chaos → inbox full of ellipses... → morning coffee → clean, dashed runway to Melbourne. ( ͡° ͜ʖ ͡°)
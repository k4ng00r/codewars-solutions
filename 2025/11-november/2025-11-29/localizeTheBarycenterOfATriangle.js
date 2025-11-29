// barTriang: find the centroid of a triangle, or where all three bad decisions meet ( ͡° ͜ʖ ͡°)
// p1, p2, p3 are the vertices: three points arguing over where the middle should be
function barTriang(p1, p2, p3){
  // centroid formula: (x1 + x2 + x3) / 3
  // just average the x’s, like averaging how wrong three mates are about "only two beers"
  const x0 = parseFloat(((p1[0] + p2[0] + p3[0]) / 3).toFixed(4));

  // same story for y: (y1 + y2 + y3) / 3
  // toFixed(4) because math people get cranky if you don’t trim the decimals nicely
  const y0 = parseFloat(((p1[1] + p2[1] + p3[1]) / 3).toFixed(4));

  // result is the barycenter/centroid:
  // the point where all medians meet and your triangle’s centre of gravity just shrugs
  // also where I’d ideally be sitting: one third Melbourne sun, two thirds Poznań chaos
  return [x0, y0]
}
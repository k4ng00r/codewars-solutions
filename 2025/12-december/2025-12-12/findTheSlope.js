function slope(points) {
  const deltaY = points[3] - points[1];
  const deltaX = points[2] - points[0];
  if (deltaX === 0) return 'undefined';
  return (deltaY/deltaX).toString();
}
function isToday(date) {
  return new Date().toDateString() === new Date(date).toDateString();
}
function abbrevName(name){
  // code away
  return name.split(' ').map(word => word[0]).join('.').toUpperCase();
}
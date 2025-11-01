/*
  // 🦘 Kangaroo’s Letter Counter //

  Counting letters, huh? Used to count cigarette butts and coins from the pavement.  
  Now I count characters in strings — cleaner habit, same twitch in the fingers.  
  Every 'l', every 'o', feels like tracking old mistakes:  
  how many nights I drank too much, how many names I forgot.  

  They tell you code’s logical, but it’s just memory, mate.  
  Every loop a relapse, every match a flashback.  
  Sometimes the count’s zero, sometimes it hits you twice —  
  just like a bad weekend with good intentions.  
*/

const strCount = (str, letter) => str.split('').filter((el) => el === letter).length;
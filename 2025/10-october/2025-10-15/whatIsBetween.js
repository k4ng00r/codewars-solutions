/*
  // 🦘 Kangaroo’s Range of Regrets //

  They want every number between two points, eh?  
  Sounds a lot like my life — always somewhere between broke and wasted.  
  Start at a, end at b, fill in the gaps with bad decisions and half-smoked darts.  

  Used to walk those ranges myself — street to shelter, bar to bar,  
  counting cracks in the pavement like they meant something.  
  Now I count integers. Cleaner job, same rhythm.  
  From one to four, from dusk to dawn — just keep stepping till it’s over, mate.  
*/

const between = (a, b) => Array(b - a + 1).fill(0).map((_, i) => a + i);
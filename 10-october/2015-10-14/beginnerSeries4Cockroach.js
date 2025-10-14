/*
  // 🦘 Kangaroo’s Bug Lab //

  They told me cockroaches are fast... mate, they’ve never seen me run  
  when the pub’s closing and last call hits.  
  Anyway, here’s the math: take their fancy kilometers per hour,  
  turn it into centimeters per second, and keep it real — round down,  
  just like the bar tab after a messy night.

  Conversion’s simple, mate:
  1 km = 100,000 cm  
  1 hour = 3600 seconds  
  So we multiply by 100,000 and divide by 3600 — then floor it,  
  ‘cause decimals are for sober people.
*/

const cockroachSpeed = (s) => Math.floor(s * 1_000 / 36);
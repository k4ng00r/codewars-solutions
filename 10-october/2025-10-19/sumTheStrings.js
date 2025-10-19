/*
  // 🦘 Kangaroo’s Stringy Arithmetic //

  Numbers as strings — bloody hell, that’s like trying to drink beer through a USB cable.  
  Back in Melbourne I had accountants doing math for me;  
  now I’m sitting in Poznań, adding text together like it’s philosophy.  

  “Empty string counts as zero,” they said — story of my life, mate.  
  Empty fridge? zero. Empty wallet? zero. Empty soul? well… that’s a runtime error.  
  Still, a sum’s a sum — add two messes together, hope for something less messy.  

  parseInt? yeah, I know him. good bloke.  
  template literals? keeps things shiny while everything else falls apart.  
*/

const sumStr = (a, b) => 
  // just two drunks trying to make sense of the tab.
  `${(parseInt(a) || 0) + (parseInt(b) || 0)}`;
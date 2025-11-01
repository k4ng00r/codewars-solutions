/*
  // 🦘 Kangaroo’s Grading Hangover //

  Exams, projects, numbers… mate, I’ve failed more tests than I’ve passed breathalyzers.  
  In Melbourne I used to cheat off a chick named Riley — she had handwriting like jazz,  
  all over the place but somehow still beautiful. I think she became a lawyer.  
  I became… whatever this is.  

  Poland’s the same test every day — wake up, survive, maybe shower.  
  The only grading system here’s how strong the coffee is and how cold the Żubrówka feels.  
  Exam > 90? that’s like waking up before noon.  
  Projects > 10? I can barely finish one cigarette without losing focus.  

  still — rules are rules, mate.  
  give the kids their points, let the code run, and don’t overthink it.  
  ternary operators? nah. not before caffeine. not after vodka either.  
*/

function finalGrade (exam, projects) {
  // simple ifs, no fancy nesting — my brain’s already nested in fog.  
  if (exam > 90 || projects > 10) return 100;     // top of the class, probably sober.
  else if (exam > 75 && projects >= 5) return 90; // did the work, half hungover.
  else if (exam > 50 && projects >= 2) return 75; // tried, failed, still passed — classic.
  else return 0;                                  // dead last. story of my youth.
}
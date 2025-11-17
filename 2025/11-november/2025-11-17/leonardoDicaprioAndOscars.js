// tiny function, huge emotional baggage ( ͡° ͜ʖ ͡°)
// Leo spent half his career like me refreshing Codewars: "is today the day or what?"
function leo(oscar){
  // 88: the prophecy fulfilled, the green tick of Hollywood
  // that moment when the tests finally pass and you pretend you "never doubted it"
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";

  // 86: the eternal meme, universe trolling the poor guy
  // "Not even for Wolf of Wall Street?!" = dev equivalent of "not even for this refactor?!"
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";

  // anything below 88 (and not 86): still grinding, still no reward
  // like me shipping katas from a cold flat and dreaming of Melbourne sun
  if (oscar < 88) return "When will you give Leo an Oscar?";

  // over 88: mate, he already got one, stop re-running the same drama
  // like re-running tests after they passed, just to feel something again (╯°□°）╯︵ ┻━┻
  if (oscar > 88) return "Leo got one already!";
}
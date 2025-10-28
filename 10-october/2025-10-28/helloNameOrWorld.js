// greet like a polite bouncer at Stary Browar: fix the name’s hat, let ’em in ( ͡° ͜ʖ ͡°)
// empty guest list? we wave “World” through — no drama, just vibes
// lowercase hangovers, uppercase redemption: first letter stands straight, the rest lies down
// wrote this between tram bells and a lukewarm espresso on Łazarz; simple kata, steady hands
// tests are church; this is the quiet amen

const hello = name => `Hello, ${name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`; // tidy caps, tidy life
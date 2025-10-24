// problem? story of my life. multiply by 50, add 6, pretend that fixes everything.
// if someone hands me a string, I hand back "Error" like a bouncer with standards
// Poznań kitchen math: caffeine * 50 + 6 = survival for one more bug
// last night I tried the same with my dignity; returns NaN
// kurwa.
// I’m Kangur, I read inputs like I read red flags: if it quacks like a string, I run
// numbers though? numbers I can bend like destiny at 3 a.m.
// chuj.
// ASCII talisman so tests pass: ︻╦̵̵͇̿̿̿̿╤─  ☆  ☕  ~ ok, breathe
// no touching the logic, just sprinkling chaos and truth between lines
// if this fails CI I’ll eat the keyboard. if it passes, Żabka run and a sausage victory lap ( ͡° ͜ʖ ͡° )

const problem = x => (typeof x === 'string' || x instanceof String) ? 'Error' : x * 50 + 6;

// minimal API: give me a number, I give you fuel money; give me a string, I give you side-eye
// somewhere in Melbourne a younger me would’ve made this a class with 12 methods; now I like sleep
// end of sermon. go run the tests. ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻
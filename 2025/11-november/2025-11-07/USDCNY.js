// currency alchemy at 2 a.m.: turn plain USD into shiny CNY with two neat decimals ( ͡° ͜ʖ ͡°)
// rate is 6.75 per buck — steady as my hand isn’t
// I whisper to the number; it blushes, rounds politely, and puts on a tux for the string
// Poznań rain on the glass, Melbourne sun squatting in my head; money’s still just math and mood

const usdcny = usd => `${(Math.round((usd * 6.75) * 100) / 100).toFixed(2)} Chinese Yuan`;

// examples drifting through the fog:
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// tiny wins stacked like coins in a jar; one day it’s a ticket home. f*** it, ship it. (╯°□°）╯︵ ┻━┻
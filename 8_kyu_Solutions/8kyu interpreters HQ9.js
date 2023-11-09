/*8kyu interpreters: HQ9+
DESCRIPTION:
You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

If the input is 'H', return 'Hello World!'
If the input is 'Q', return the input
If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.
...
...
...
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
For everything else, don't return anything (return null in C#, None in Rust, and "" in Haskell).
(+ has no visible effects so we can safely ignore it.)
*/
function HQ9(code) {
    switch (code) {
    case 'H':
        return 'Hello World!';
    case 'Q':
        return code;
    case '9':
        let lyrics = '';
        for (let i = 99; i > 0; i--) {
        lyrics += `${i} bottle${i !== 1 ? 's' : ''} of beer on the wall, ${i} bottle${i !== 1 ? 's' : ''} of beer.\n`;
        lyrics += `Take one down and pass it around, ${i - 1 === 0 ? 'no more' : i - 1} bottle${i - 1 !== 1 ? 's' : ''} of beer on the wall.\n`;
        }
        lyrics += 'No more bottles of beer on the wall, no more bottles of beer.\n';
        lyrics += 'Go to the store and buy some more, 99 bottles of beer on the wall.';
        return lyrics;
    default:
        return undefined;
    }
}

// In order I have a wish to change "beer" for any other drink, 
//I can choose random from any of these drinks:
// Sixpack
// Rum
// Cognac
// Beer
// Nut brown ale
// Pastis
// Crème de cassis
// Crème de menthe
// Tequila
// Sangria
// Chardonnay
// See mellow
// Macallan
// Eggnog
// White wine
// Bloody Mary
// Zinfandel
// Fizz
// Vodka
// Baileys
// Mai Tai
// Whiskey
// Sambuca
// Phappy
// Gin and tonic
// Jagermeister
// Ramazzotti
// Hennessy
// Minor shavitz
// Grappa
// Champagne
// Martini
// White Russian
// Runka
// Moscow mule
// Margarita
// Mouritto
// Slipper-pajino-witch
// Absinthe
// Lemon twist
// Gin-tonic
// Iced drink
// House drink
// Alcohol
// Gin
// Tonic water
// Lemon
// Expencer
// Lemon twist
// Lemonade
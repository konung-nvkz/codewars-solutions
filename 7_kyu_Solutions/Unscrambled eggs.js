/*Unscrambled eggs
DESCRIPTION:
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.
*/
function unscrambleEggs(str) {
    return str.split('egg').join().replace(/,/gi,'');    
}
console.log(unscrambleEggs("Beggegeggineggneggeregg"));
// according to base task, string.replace(/egg/gi, '') is sufficient
//but I decided to find another way by creating an array where 'egg' is a separator and splitting it back
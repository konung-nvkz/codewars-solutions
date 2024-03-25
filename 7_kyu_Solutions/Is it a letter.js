/*Is it a letter?
Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.
*/


function isItLetter(char) {
    return char.toUpperCase() != char.toLowerCase() || char.codePointAt(0) > 127
}
// One more check:
// This time we check if it i one symbol, and if this symbol is among letters

function isItLetter(str) {    
    return str.length === 1 && RegExp(/^\p{L}/,'u').test(str)
}

//The code uses a regular expression to test if the character in the string is a letter. 
//The regular expression used is /^\p{L}/u. Let's break it down further:

//^ asserts the start of the string.
//\p{L} is a Unicode property escape that matches any Unicode letter.
// /u is a flag that enables full Unicode matching for the regular expression.

console.log(isItLetter("s")); // true
console.log(isItLetter("9")); // false

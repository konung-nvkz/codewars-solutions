/*Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
FUNDAMENTALS
*/

function replace(str) {
    return str.replace(/[aeiou]/gi, "!")
}
console.log(replace("Hi!"))//"H!!"
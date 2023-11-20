/*Is it a number?
DESCRIPTION:
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/

function isDigit(n) {
    return /^[-+]?(\d+(\.\d*)?|\.\d+)$/.test(n.trim());
}
/* Short explanation not to forget how regexp works:

^ asserts the start of the string.
[-+]? matches an optional positive or negative sign.
(\d+(\.\d*)?|\.\d+) matches either:
\d+(\.\d*)?: one or more digits followed by an optional decimal part.
|: or
\.\d+: a decimal part without any leading digits.
$ asserts the end of the string.*/


console.log(isDigit("3"))//true
console.log(isDigit("  3  "))//true
console.log(isDigit("-3.23"))//true
console.log(isDigit("3-4"))//false
console.log(isDigit("  3   5"))//false
console.log(isDigit("3 5"))//false
console.log(isDigit("zero"))//false

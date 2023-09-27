/*Contamination #1 -String-
DESCRIPTION:
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"

*/
function contamination(text, char) {
    return char.repeat(text.length);
}
function contamination1(text, char) {
    if (text === '' || char === '') { // check for emptiness
        return '';
    }
    let str = ''; // initialize string for result
    for (i=0; i<text.length; i++) {
        str += char; // concat char to the string until it has length of the initial text
    }
    return str;
}
console.log(contamination1("abc", 'z'));



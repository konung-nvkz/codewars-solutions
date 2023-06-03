/*Replace With Alphabet Position
DESCRIPTION:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {  
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        
    return text.toLowerCase()
        .replace(/[^a-z]/g,'')
        .split('')
        .map(x => abc.indexOf(x)+1)
        .join(' ');
}

/*
HINT from stackoverflow:
You can get a codepoint* from any index in a string using String.prototype.charCodeAt. 
If your string is a single character, you’ll want index 0, and the code for a is 97 
(easily obtained from JavaScript as 'a'.charCodeAt(0)), so you can just do:

s.charCodeAt(0) - 97

And in case you wanted to go the other way around, String.fromCharCode 
takes Unicode codepoints* and returns a string.
String.fromCharCode(97 + n) 


function alphabetPosition(text) {
    return text.split('') 
        .filter(v=>/[a-zA-Z]/
        .test(v))
        .map(v=>
            v.toLowerCase()
            .charCodeAt(0)-96)
        .join(' ');
}
// get an array from text by .split
// .filter and .test to get alphabetic letters only and match them
//.map to get a new array of numbers with a codepoint from charCodeAt
// but first all letters are lower cased
// finally we .join th e new array back to string


*/

/*Reversed Message
DESCRIPTION:
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/

/*********Below there are two functions 
    reverseWords and reverseString****/
/* They do not solve the case, 
but the divider changes the output.
If I forget, I will look and compare here. */

const reverseWords = (s) => {
    return s.toLowerCase().split(" ").reverse().join(" ");
}
console.log(reverseWords('This is an example of a Reversed Message!'))
//output: message! reversed a of example an is this

function reverseString(s) {
    return s.toLowerCase().split("").reverse().join("");
}
console.log(reverseString('This is an example of a Reversed Message!'))
//output: !egassem desrever a fo elpmaxe na si siht


/*********Below there is a solution for the task finally****/

function reverseMessage(str) {
    return str.toLowerCase().split('').reverse().join('')
            .replace(/(^|\s+)[a-z]/g, c => c.toUpperCase());
}

console.log(reverseMessage('This is an example of a Reversed Message!'))

// Regular Expression Explanation:
// / - The beginning.
// (^|\s+) - This part matches either the start of the string (^) 
// or one or more whitespace characters (\s+).
// [a-z] - This part of the regular expression matches any lowercase letter from 'a' to 'z'.
// / - The end of the regular expression.
// g - This is a flag that indicates a global search



// attempt to divide into two functions:

function reverseString(s) {
    return s.toLowerCase().split("").reverse().join("");
}

function reverseMessage(str) {
    return reverseString(str)
            .replace(/(^|\s+)[a-z]/g, c => c.toUpperCase());
}

console.log(reverseMessage('This is an example of a Reversed Message!'))

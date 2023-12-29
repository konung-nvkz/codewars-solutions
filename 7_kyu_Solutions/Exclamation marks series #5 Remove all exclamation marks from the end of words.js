/*Exclamation marks series #5: Remove all exclamation marks from the end of words
Task
Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/
//look at the code and tell the difference. Explain how that works
function remove(str) {
    return str.replace(/\b!+/g, '');
}

// function remove(s){
//     return s.split(' ').map(v=>v.replace(/!+$/gi,'')).join(' ');
// }
/*function uses the split, map, and join methods to remove exclamation marks from the input string. Here's how it works:

The split method is used to split the input string into an array of words. The delimiter used is a space character ' ', so each word is separated by a space.

The map method is called on the resulting array to iterate over each word and modify it.

For each word, the replace method with the regular expression /!+$/gi is used to remove exclamation marks from the end of the word.

!+$ matches one or more exclamation marks at the end of the word.
g is a flag that performs a global search, replacing all occurrences of the pattern.
i is a flag that makes the search case-insensitive.
The modified array of words is then joined back into a string using the join method, with each word separated by a space.

The resulting string is returned as the output of the function.*/

console.log(remove("Hi!")); // Output: "Hi"
console.log(remove("Hi!!!")); // Output: "Hi"
console.log(remove("!Hi")); // Output: "!Hi"
console.log(remove("!Hi!")); // Output: "!Hi"
console.log(remove("Hi! Hi!")); // Output: "Hi Hi"
console.log(remove("!!!Hi !!hi!!! !hi")); // Output: "!!!Hi !!hi !hi"
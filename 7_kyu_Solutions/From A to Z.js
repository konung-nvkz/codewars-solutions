/*
From A to Z

Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"
Notes
A hyphen will separate the two letters in the string.
You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).
*/
// first the code itself:

function gimmeTheLetters(str) {
    const [start, end] = str.split('-');
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0);
    let result = '';

    for (let i = startCode; i <= endCode; i++) {
        result += String.fromCharCode(i);
    }

    return result;
}

/*Brief explanation of what is done:

In this function, we first split the input string into two parts, start and end, using the hyphen as the separator. 
Then, we convert the first character of each part to its Unicode code point using charCodeAt(). 
We iterate from the start code point to the end code point, concatenating each character to the result string using String.fromCharCode(). 
Finally, we return the result string.*/

// The  same code again, commented line by line for learning purposes.

function gimmeTheLetters(str) {
    //Extract the 1st and the last letters from the range.
    const [start, end] = str.split('-');
    //Convert the letters to their ASCII codes.
    //The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
    //In two given strings (start and end) there will be the 1st symbol only (indexed 0).
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0);
    //Create an empty string to add up letters in it. 
    let result = '';

    //Fill in the string by symbols that have unicode between first and final letters of the task.
    for (let i = startCode; i <= endCode; i++) {
        //String.fromCharCode() method takes one or more Unicode values as arguments and returns a string created from those values.
        //So we concatenate the string with the next symbol with index.
        //It's important to note that the String.fromCharCode() method only works with UTF-16 code units, and not with arrays or other data types.
        result += String.fromCharCode(i);
    }

    return result;
}
//Some simple tests

console.log(gimmeTheLetters("a-z")); // Output: "abcdefghijklmnopqrstuvwxyz"
console.log(gimmeTheLetters("h-o")); // Output: "hijklmno"
console.log(gimmeTheLetters("Q-Z")); // Output: "QRSTUVWXYZ"
console.log(gimmeTheLetters("J-J")); // Output: "J"

/*
// Bonus: Another solution with regexp.
// Shorter, but less universal.

const gimmeTheLetters = sp => {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    const res = abc.replace(new RegExp(`[^${sp}]`, 'gi'), '')

    return /[A-Z]/.test(sp) ? 
        res.toUpperCase() :
        res
}

//In this variant we first give the whole alphabet.
// Then, by regular expression, we compare the entered string (sp) with abc.
// The pattern [^${sp}] matches any character that is not present in the sp variable. 
// The [^...] syntax is used to define a negated character set.
// The gi flags are passed to the RegExp constructor to make the pattern case-insensitive (i) and perform a global search (g).
// in final ternary we check if the string has at least on upper-cased symbol and if it is so, we make the whole string upper-cased.

*/
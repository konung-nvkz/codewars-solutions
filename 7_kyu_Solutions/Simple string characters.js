/*Simple string characters

DESCRIPTION:
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!

*/

function solve(s){
    // using some regexp
    let upper = s.match(/[A-Z]/g) || [];
        lower = s.match(/[a-z]/g) || [];
        number = s.match(/[0-9]/g) || [];
        special = s.match(/[^a-z0-9]/gi) || [];
    // returning an array with four variables
    return [upper.length, lower.length, number.length, special.length];
    };

console.log(solve("*'&ABCDabcde12345"));
console.log(solve("Codewars@codewars123.com"));


// function solve(str) {
//     return [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(regExp => str.split(regExp).length - 1)
// }
//split the input string str into an array of substrings based on four regular expressions, 
//compute the length of each of these substrings. The four regular expressions are:
/*
1. /[a-z]/: Matches any lowercase letter from a to z.
2. /[a-z]/: Matches any lowercase letter from a to z.
3. /\d/: Matches any digit from 0 to 9.
4. /[\w]/: Matches any alphanumeric character (letter or digit).*/

//.map() applies splitting the string based on a regExp and computing the length of each substring
// to each of the four regular expressions, and returns an array of the four resulting lengths.
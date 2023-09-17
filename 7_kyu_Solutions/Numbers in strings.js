/*Numbers in strings
DESCRIPTION:
In this Kata, you will be given a string that has lowercase letters and numbers. 
Your task is to compare the number groupings and return the largest number. 
Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!

Please also try Simple remove duplicates
*/

//we will create an array of numbers
// by replacing all non-digits by spaces
// splitting the result into the array
// and mapping it into numbers (as JS may consider it as a string)
// finally we will find a maximum number from the copy of this array

function solve(str) {
    return Math.max(...str
        .replace(/\D+/g, ' ')
        .split(' ')
        .map(Number));
};

console.log(solve("gh12cdy695m1"));

//a solution with match
//const solve = s => Math.max(...s.match(/\d+/g).map(Number));
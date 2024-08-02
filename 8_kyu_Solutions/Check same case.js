/*Check same case
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

function sameCase(a, b){
    return !a.match(/[a-z]/i) || !b.match(/[a-z]/i) ? -1 : 
        /^[a-z]*$|^[A-Z]*$/.test(a+b) ? 1 : 0
}
//Explanation
// First condition checks whether both a and b are letters
//The second tests if string that cnsists of a and b is of the same case.


//Another variant that looks more neat
const isLower = s => /[a-z]/.test(s)
const isLetter = s => /[a-zA-Z]/.test(s)

const sameCase = (a, b) => isLetter(a) && isLetter(b) 
    ? isLower(a) === isLower(b) ? 1 : 0
    : -1
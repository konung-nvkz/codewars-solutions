/*Alternate case
DESCRIPTION:
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. 
E.g: Hello World -> hELLO wORLD
*/

function alternateCase(str) {
    let arr = str.split('');
    arr = arr.map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())
    return arr.join('');
}
console.log(alternateCase("Hello World"));
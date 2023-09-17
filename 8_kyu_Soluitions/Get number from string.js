/*Get number from string
DESCRIPTION:
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

*/

function getNumberFromString(str) {
    return +str.replace(/\D+/g, '')
};

console.log(getNumberFromString("gh12cdy695m1"));
/*Regex validate PIN code
DESCRIPTION:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

function validatePIN(number) {
    return /^(\d{4}|\d{6})$/.test(number)
} 

//short explanation of how it works
// ^ - beginning of the string
// (\d - string must consist of digits
// and have length of exact 4 symbols
//or
// (\d - string must consist of digits
// and have length of exact 6 symbols
// $ end of the line

console.log(validatePIN(1234));// t
console.log(validatePIN(12345));// f
console.log(validatePIN(123445));// t
console.log(validatePIN('a234'));//f

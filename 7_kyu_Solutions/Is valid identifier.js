/*Is valid identifier?
DESCRIPTION:
Given a string, determine if it's a valid identifier.

Here is the syntax for valid identifiers:
Each identifier must have at least one character.
The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
Examples of valid identifiers:
i
wo_rd
b2h
Examples of invalid identifiers:
1i
wo rd
!b2h
*/

function isValid(idn) {
    return /^[a-zA-Z$_][A-Za-z$_0-9]{0,}$/.test(idn)
}

//comments on how the regexp works:
// ^ asserts the start of the string.
// [a-zA-Z$_] matches any uppercase or lowercase letter, or the characters $ or _. 
//This ensures that the identifier starts with a letter, $, or _.
// [A-Za-z$_0-9]{0,} matches any uppercase or lowercase letter, or the characters $, _, 
//or any digit (0-9). Can be simplified to [\w$] (word)
//The {0,} means that there can be zero or more occurrences of these characters.
// $ asserts the end of the string.


//Test cases:
  console.log(isValid("myVariable")); // true
  console.log(isValid("_privateVariable")); // true
  console.log(isValid("$constant")); // true
  console.log(isValid("123")); // false (starts with a digit)
  console.log(isValid("in-valid")); // false (contains a hyphen)
  console.log(isValid("")); // false (empty string)
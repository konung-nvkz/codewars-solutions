/*Simple Fun #176: Reverse Letter
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/

function reverseLetter(str) {
    return str.replace(/[^a-zA-Z]/g, '')
        .split('')
        .reverse()
        .join('');
}

/*
How this works:
replace(/[^a-zA-Z]/g, '') method is used to remove all non-alphabetic characters from the string.
split('') method is used to split the string into an array of characters.
reverse() method is used to reverse the order of the elements in the array.
join('') method is used to join the elements of the array back into a string.*/

//Tests:
console.log(reverseLetter('krishan')); // Output: 'nahsirk'
console.log(reverseLetter('ultr53o?n')); // Output: 'nortlu'
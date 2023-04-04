/*Vowel remover
DESCRIPTION:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata*/

// decided to add up another solution
function shortcut (string) {
    let newString = ''; // add u new first line
    for (let i=0; i <= string.length - 1; i++) { //start iterating from the 1st str symbol to the last
      if (!'aeiou'.includes(string[i].toLowerCase())) { //check if symbol is not a vowel (lower case)
        newString += string[i] //if it is not, add it up to the new string
        }
    }
    return newString; // result is a new string
}
    
    //return string.replace(/[aeiou]/g,'')
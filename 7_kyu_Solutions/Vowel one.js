/* Vowel one

vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100" */

function vowelOne(s){
  // will use regular expressions and ternary
    return s.replace(/./g,v=>/[aeiou]/i.test(v)?'1':'0')
}
//regular expression /./g matches any character in the string. 
//g flag makes it global.
///[aeiou]/i.test(v)?'1':'0' - we compare eac symbol with vowel and if it suits, put 1 instead, else 0
// i flag in the 2nd regExp makes it case-insensitive => matches both uppercase and lowercase vowels.

//another variant: if the string symbol is not a vowel, put 0, else 1
return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');

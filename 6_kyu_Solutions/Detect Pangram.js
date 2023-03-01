/*Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.*/

function isPangram(string){
  //...
    return new Set(string.toLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
  // we get a string and do several things with it
  // .toLowerCase() - we bring it to lower case
  //.replace(/[^a-z]/gi, '') - replace non-alphabetic symbols with empty space
  //.split('') - remove all spaces
  // new Set() - bring the result of previous to a set 
  // .size === 26 - compare the size of the set with the size of the aplhabet (26 symbols)
  // if function returns true, we have a pangram
  // otherwise it is not
}

/* Vowel Count

DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let count = 0; //declare the counter
        for (let i=0; i <= str.length - 1; i++) {//start the cycle
            if ('aeiou'.includes(str[i].toLowerCase())) { //start comparing the letters in string with vowels list  - aeiou'.includes(str[i]
                // note that the list is lowercased - .toLowerCase()
                count += 1; // if the letter is a vowel, count adds up
            }            
        }
    return count;
}
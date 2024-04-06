/*Character Counter
You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.
*/
function validateWord(s) {
    return(characterCounter(s));
}

function characterCounter(str) {
    let word = str.toLowerCase();
    let charCount = {};

    for (let char of word) {
        if (charCount[char]) {
        charCount[char]++;
        } else {
        charCount[char] = 1;
        }
    }

    let counts = Object.values(charCount);
    let firstCount = counts[0];

    return counts.every(count => count === firstCount);
}
/* First of all how the counter works:
1) We make the string lower cased.
2) We create an empty object or dictionary to store the count of each character in the word.
3) We iterate through each character in the word and update the count in the dictionary.
4) Finally, we check if all the values in the dictionary are the same. If they are, return true; otherwise, return false.
*/

  console.log(characterCounter("abcabc")); // true
  console.log(characterCounter("abcabcd")); // false
  console.log(characterCounter("123abc!")); // true

/*There is an easier and more elegant solution
We add up one more argument in function input - l, which is a lower-cased string
And then compare if it's length is dividable to the size of Set, that contains of the same elements.
Once the remainder of the division is 0, the result is true, othervise, it is false
*/
function validateWord(s, l = s.toLowerCase()) {
    return l.length % new Set(l).size == 0
}
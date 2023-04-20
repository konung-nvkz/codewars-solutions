/*Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/

function remove(s){
    return s.split(' ') //make an array with space as a separator
    .map(v=>v.replace(/(^\w+!$|^!\w+$)/,'')) // create a new array based on it
    //where all the words with exclamation mark before or after are replaced with empty 
    .join(' ')// join back to string
    .trim() //remove whitespaces from both beginning and and of the string
    .replace(/\s+/g,' ')//search for extra spaces and remove them
}

console.log(remove("Hi!"));
console.log(remove("Hi! !Hi Hi!"));
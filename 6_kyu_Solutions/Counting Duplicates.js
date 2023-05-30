/*Counting Duplicates
DESCRIPTION:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/
//function below compares the length of set 
//created on the basis to lowerCased string and the string

function counting(str) {
    let set = new Set(str.toLowerCase().split(''));
    return str.length - set.size;
}

console.log(counting("abcde"));
console.log(counting("aabbcde"));
console.log(counting("aabBcde"));
console.log(counting("indivisibility"));
console.log(counting("Indivisibilities"));

//more accurate solution
function duplicateCount(text){
    return (text.toLowerCase() // lowercase the string
        .split('') //create an array
        .sort() // sort it 
        .join('') // create a string 
        .match(/(.)\1+/g) || []) // look for repeating symbols by regexp 
        // /(.)\1+/g  means any symbol that is repeated more than once
        // if .match doesn't find repeating symbol, it returns null
        // we replace null by empty array by || [])
        //.match(/([^])\1+/g) || []) 
        .length; //finally we count the length of array
}

console.log(duplicateCount("abcde"));// 0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
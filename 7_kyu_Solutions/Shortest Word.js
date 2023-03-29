/*Shortest Word
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

*/

/*function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}*/

function findShort(s){
    return s.split(" ").sort((a,b) => a.length-b.length)[0].length;
}

//First, we split the string into an array of words using the split() method 
// space character is the separator. 
//then sort the array based on the length of each word using the sort() method 
//and an arrow function that subtracts the length of b from the length of a.
// then we find the first element of the sorted array 
// got it! It is the shortest word in the array.
//Finally, we return its length 
/*Isograms
DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(string){
    
    let set = new Set(string.toLowerCase()); //we create a new set based on the input string
    //string is lower cased to avoid repeating letters like D and d
    return set.size == string.length; //and then compare size of te set with the length of the string
}
//NB set has no repeating elements, so number of characters in it will be the same if the word is an isogram

console.log(isIsogram('Dermatoglyphics'));

//uncomment below to get a single line solution
/*
function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}*/
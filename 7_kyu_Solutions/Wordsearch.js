/*Wordsearch
DESCRIPTION:
Create a function wordSearch(word,text) that searches to see whether a word word is present in the given text variable.

Note it has to be a full word which means it is surround by a word boundary (spaces, end/start of string, various punctuation, ... ).

Example:
Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

wordSearch("prince",text)--> true
wordSearch("beautiful",text)--> true
wordSearch("clown",text)--> false
wordSearch("yellow",text)--> false
wordSearch("akes the",text)--> false
*/

let text = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";
function wordSearch(word, text) {
    return text.replace(/[^a-z ]/gi, '')
                .split(' ')
                .includes(word)
}
console.log(wordSearch("prince",text));//--> true
console.log(wordSearch("beautiful",text));//--> true
console.log(wordSearch("clown",text));//--> false
console.log(wordSearch("yellow",text));//--> false
console.log(wordSearch("akes the",text));//--> false

//one more solution
// function wordsearch(n){
//     return text.search("\\b"+n+"\\b")>-1
// }
// search() method is called on the text string, passing a regular expression as an argument.
//regular expression is constructed using \b metacharacter, which matches a word boundary. 
//This ensures that the search term matches only whole words in the text, and not substrings. 
//The n parameter is used to construct the regular expression by concatenating it with \b on both sides.
//If the search term is found in the text string, 
//the search() method returns the index of the first match (a non-negative integer). 
//If the search term is not found, the method returns -1.
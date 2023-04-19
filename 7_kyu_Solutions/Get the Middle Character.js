/*Get the Middle Character
DESCRIPTION:
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
*/
function getMiddle(str) {
    if (str.length%2===0) {
        return str.slice((str.length/2-1), (str.length/2+1))
    }   else {
        return str.slice((str.length/2),(str.length/2+1))
    }     
}
//if else checks for even//odd string length
//.slice takes the symbol of the string with index close to its middle


console.log(getMiddle("test")); 
console.log(getMiddle("middle")); 
console.log(getMiddle("testing")); 
console.log(getMiddle("m"));
console.log(getMiddle("")); 
console.log(getMiddle("middlerjdyujty"));
/*
function getMiddle(s)
{
 if (s.length%2===0){return s.slice((s.length/2-1),(s.length/2+1))}
 if (s.length%2!==0){return s.slice((s.length/2),(s.length/2+1))}
}*/
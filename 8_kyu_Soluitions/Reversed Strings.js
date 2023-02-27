/*Reversed Strings

DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/

//two solutions below

//solution with for
function solution(string) {
    let newString = "";
    for (let i = string.length - 1; i >=0; i--) {
        newString += string[i];
    }
    return newString;
}
// one more attempt, we first divide the string to array by .split() method
// then get the reversed array by .reverse()
// finally we get the result by .join("")
// looks more eleant, but needs knowledge of string and array methods

function solution2(str){ 

    return str.split("").reverse().join("");
}


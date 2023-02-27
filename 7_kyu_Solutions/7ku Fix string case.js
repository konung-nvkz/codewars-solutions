/*DESCRIPTION:
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!*/

function solve(s){
    //first of all start two counts: up - for Upper case characters
    // down - for lower case    
    let up = 0;
    let down = 0;
    
    // start iterating
    for (i = 0; i < s.length; i++) {    
      //compare the character in string with Upper Case symbol
      if (s[i] == s[i].toUpperCase()) {
          up++; //if it is so, add up to the up counter
          // console.log(up, down); //uncomment to see how count grows
          } else {
          down++; //otherwise add up to lower case counter
          // console.log(up, down); //uncomment to see how count grows
          }      
      }
    // start ternary to return the result according ro thhe task:
    //if the string contains equal number of uppercase and lowercase letters, 
    // convert the string to lowercase.
    return down>=up?s.toLowerCase():s.toUpperCase();
}

// The same with regexp
const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

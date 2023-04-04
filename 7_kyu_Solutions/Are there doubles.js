/*Are there doubles?
DESCRIPTION:
Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or   .

You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

Examples:

  doubleCheck("abca")
  //returns false
  
  doubleCheck("aabc")
  //returns true
  
  doubleCheck("a 11 c d")
  //returns true
  
  doubleCheck("AabBcC")
  //returns true
  
  doubleCheck("a b  c")
  //returns true
  
  doubleCheck("a b c d e f g h i h k")
  //returns false
  
  doubleCheck("2020")
  //returns false
  
  doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
  //returns false*/

function doubleCheck(str){
    //Are there doubles?  
   let result = false; //assume that there are no double letters
    let text = str.toString().toLowerCase(); //make the data to type string and to lower case
    for (let i = 0; i < text.length; i++) { //start a cycle
        if (text[i] === text[i + 1]) { //compare the letter to the next
            result = true; //if found change result to true
        }
    }
    return result; // give the answer
}
/* below is the same with recursion, variables have different name
function doubleCheck(str) {
  let strlower = str.toString().toLowerCase();  //make the data to type string and to lower case
  if (strlower.length < 2) { //check the length - less than two sympols always return false
    return false;
  }
  if (strlower[0] === strlower[1]) { // make a check for symbols
    return true;
  }
  return doubleCheck(strlower.slice(1)); //start recursion
}
*/

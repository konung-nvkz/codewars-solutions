/*Double Char
DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/
function doubleChar(str) {    
    let arr = str.split('');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + arr[i]);
    }
    return result.join('');
}

console.log(doubleChar("String"));


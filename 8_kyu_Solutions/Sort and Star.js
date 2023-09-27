/*Sort and Star
DESCRIPTION:
You will be given a list of strings. 
You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) 
and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
//solution to show how it works
function twoSort(s) {
    let arr = s.sort();
    let first = arr[0].split("");
    let result = "";
    for (let i = 0; i < first.length; i++) {
        result += first[i] + "***";
    }
    return result.slice(0, -3);
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));


//easier one lne solution with 'join'
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}
// solution with reduce
function twoSort(s) {
    return s.sort()[0].split('').reduce((acc, curr) => acc + "***" + curr);
}
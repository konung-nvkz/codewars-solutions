/*Length and two values.
DESCRIPTION:
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!
*/
function alternate(n, firstValue, secondValue){
    // your code
    let result = [];
    if (n===0) {
        return [];
    } else {
        for (let i=1; i<=n; i++) {
            if (i%2===0) {
                result.push(secondValue);
            } else {
                result.push(firstValue);}            
        }
        return result;
    }}


console.log(alternate(5, true, false));
console.log(alternate(10, "blue", "red"));
console.log(alternate(0, "one", "two"));
console.log(alternate(11, "one", "two"));

// one more solution with another syntax
// const alternate = (n, a, b) => n ? [a, ...alternate(n-1, b, a)] : [];

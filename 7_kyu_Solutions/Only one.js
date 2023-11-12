/*Only one
DESCRIPTION:
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

    onlyOne() --> false
    onlyOne(true, false, false) --> true
    onlyOne(true, false, false, true) --> false
    onlyOne(false, false, false, false) --> false  
*/

//First the solution that looks most obvious
// We start counting "true", and if we meet it more than once, function stops
//finally if we he checked all elements, we check if count is still equal to zero
// Complexity looks like O(n)
function onlyOne() {
    let trueCount = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === true) {
        trueCount++;
        
        // Return false if more than one flag is true
        if (trueCount > 1) {
            return false;
        }
        }
    }
    
    // Return true if there is exactly one true flag
    return trueCount === 1;

}
console.log(onlyOne()); // false
console.log(onlyOne(true, false, false)); // true
console.log(onlyOne(true, false, false, true)); // false
console.log(onlyOne(false, false, false, false)); // false

// Below one more solution that check length of elements
// we filter out any falsy values and check the length of array

const onlyOne = (...args) => args.filter(Boolean).length === 1

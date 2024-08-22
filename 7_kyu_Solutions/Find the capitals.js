/*Find the capitals
Description:
Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/
// In general case it looks like this:
/*
function findUppercaseIndices(word) {
    const indices = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            indices.push(i);
        }
    }
    return indices;
}
*/

// We rename the function to fit the task:
var capitals = function (word) {
	// Write your code here
    const indices = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            indices.push(i);
        }
    }
    return indices;
};

// Example usage:
console.log(findUppercaseIndices("CodEWaRs")); // Output: [0, 3, 4, 6]

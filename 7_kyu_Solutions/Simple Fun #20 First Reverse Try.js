/*Simple Fun #20: First Reverse Try
Task
Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

Given an array arr, swap its first and last elements and return the resulting array.

Example
For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]

Input/Output
[input] integer array arr

Constraints: 0 ≤ arr.length ≤ 50,  -1000 ≤ arr[i] ≤ 1000

[output] an integer array

Array arr with its first and its last elements swapped.
*/

//First an explanation of how it works:

function firstReverseTry(arr) {
    //if we have an empty array or array with on element, we retutn the same array
    if (arr.length <= 1) {
        return arr;
    }
    //We memoize the 1st element ot the array
    let temp = arr[0];
        //make the 1st element equal to the last
        arr[0] = arr[arr.length - 1];
        //make the last element equal to the 1st one we memoized
        arr[arr.length - 1] = temp;
    return arr;
}

//Test case:
console.log(firstReverseTry([1, 2, 3, 4, 5]));

//The same, but written shorter.
function firstReverseTry(arr) {
    return arr.length <= 1 ? 
        arr :
        [arr[arr.length - 1], ...arr.slice(1, -1), arr[0]];
}
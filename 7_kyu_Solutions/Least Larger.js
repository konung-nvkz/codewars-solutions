/*Least Larger
Task
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, 
or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

function leastLarger(arr, index) {
    let potentialSolution = -1;
    let smallestLarger = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[index] && arr[i] < smallestLarger) {
        smallestLarger = arr[i];
        potentialSolution = i;
        }
    }

    return potentialSolution;
}

console.log(leastLarger([4, 1, 3, 5, 6], 0)); // Output: 3
console.log(leastLarger([4, 1, 3, 5, 6], 4)); // Output: -1


/*to solve the given problem, we can follow these steps:

Iterate through the array and compare each element with the element at the given index.
If an element is larger than the element at the given index, store its index as a potential solution.
After iterating through the entire array, check if a potential solution exists.
If a potential solution exists, return the index of the smallest number that is larger than the element at the given index.
If no potential solution exists, return -1.*/


const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))
/*Find the missing element between two arrays
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.
*/

function findMissing(arr1, arr2) {
    let sorted1 = arr1.sort((a, b) => a - b);
    let sorted2 = arr2.sort((a, b) => a - b);
    
    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return sorted1[i];
        }
    }
    
    return sorted1[sorted1.length - 1];
}

//Test case
console.log(findMissing([1, 2, 2, 3], [1, 2, 3])); //=> 2

// Another variant of colution that has better complexity and doesn't need sort.
//We sum up elements of each array and substract the second sum from the first.

const sum = arr => arr.reduce((a, b) => a + b, 0);
const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);

// And the same, but written in a more readable way

function findMissing(arr1, arr2) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}
/*No oddities here
DESCRIPTION:
Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds(arr) {
    return [...arr].filter(num => num%2==0); // create a copy of array filtering by even numbers
}

console.log(noOdds([1, 2, 3, 4]));
/*Price is right
Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

If there is no number that is less than or equal to the target number then return undefined.

The array of integers may be empty, but will always be an array.
*/

function priceIsRight(numbers, target) {
  if (target < Math.min(...numbers)) return undefined;
  else return Math.max(...numbers.filter(item => item <= target));
}
// Solution with the usage of built-in methods Math.min() and Math.max(), .filter() and spread operator

//Test cases

console.log(priceIsRight([1,2,3,4], 1));// 1
console.log(priceIsRight([1,2,3,4], 2));// 2
console.log(priceIsRight([1,2,3,4], 3));// 3
console.log(priceIsRight([1,2,3,4], 4));// 4
console.log(priceIsRight([1,2,3,4], 5));// 4
console.log(priceIsRight([1,2,3,4], 0));// undefined
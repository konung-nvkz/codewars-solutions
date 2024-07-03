/*How many are smaller than me?
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
*/

function smaller(nums) {
    return nums.map((n, i) => {
        return nums
            .slice(i)
            .filter(v => v < n)
            .length
    });
}
/* We use:
- map method to iterate over each element and perform a transformation on it.
- slice method to create a new array containing all the elements starting from index i to the end of the array.
- filter method to filter out only the elements that are smaller than n from this sliced array.
- the length property to get the count of the filtered elements, which represents the number of smaller numbers to the right of n.
The resulting count is added to the output array using the unshift method, which adds the element to the beginning of the array.*/

//Tests from task:
console.log(countSmallerNumbers([5, 4, 3, 2, 1])); // Output: [4, 3, 2, 1, 0]
console.log(countSmallerNumbers([1, 2, 0])); // Output: [1, 1, 0]

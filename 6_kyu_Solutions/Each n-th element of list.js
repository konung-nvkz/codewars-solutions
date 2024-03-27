/*Each n-th element of list
In this task, you need to write a function each, that takes an integer number n and a ( possibly empty ) list of integers, 
and returns a list of every nth element of the input list ( which possibly is the empty list ).

If n < 0, count by abs n from the end of the list.
If n == 0, return an empty list.

Examples
each 0 [1,2,3,4,5,6] = []  
each 1 [1,2,3,4,5,6] = [1,2,3,4,5,6]  
each (-1) [1,2,3,4,5,6] = [6,5,4,3,2,1]  
each 2 [1,2,3,4,5,6] = [2,4,6]  
each (-2) [1,2,3,4,5,6] = [5,3,1]  
each 3 [1,2] = []  
each (-3) [1,2] = []  
each 5 [1,2,3,4,5,6,7] = [5]  
each (-5) [1,2,3,4,5,6,7] = [3]  
*/
//logic:
//We should check if an array is empty. If so, we need to return an empty array.
// if array length is shorter than the absolute value of number in input, we should also return an empty array.
// If n is negative, we should take nth number from the end of array, add it to the result array, cut n numbers from the end of array, 
//check for new array length again and do this untill the length of the array we take numbers from is less then absolute value of n.
// If n is positive, we should push the result array by every nth element of the input list until the length of the array is less than the length of the a numbers left.

function each(n, xs) {
    let result = [];
    if ((n === 0) || (xs.length < Math.abs(n))) return [];
    if (n < 0) {
        n = Math.abs(n);
        for (let i = xs.length - n; i >= 0; i -= n) {
            result.push(xs[i]);
        }
    } else {
        for (let i = n - 1; i < xs.length; i += n) {
            result.push(xs[i]);
        }
    }
    return result;
}

console.log(each(0, [1, 2, 3, 4, 5, 6])); // Output: []
console.log(each(1, [1, 2, 3, 4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(each(-1, [1, 2, 3, 4, 5, 6])); // Output: [6, 5, 4, 3, 2, 1]
console.log(each(2, [1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(each(-2, [1, 2, 3, 4, 5, 6])); // Output: [5, 3, 1] wrong
console.log(each(3, [1, 2])); // Output: []
console.log(each(-3, [1, 2])); // Output: []
console.log(each(5, [1, 2, 3, 4, 5, 6, 7])); // Output: [5]
console.log(each(-5, [1, 2, 3, 4, 5, 6, 7])); // Output: [3]

//One more shorter and optimised solution

function each(n, xs) {
    if (n == 0 || xs.length == 0) return []
    let ys = (n < 0) ? xs.reverse() : xs;
    return ys.filter((_,i) => (i+1)%n == 0)
}

// Here we do the check if n is equal to 0 or the array is empty.
// And then we work with anther array ys
//If n is negative, ys is a reversed xs, if it is positive, ys is equal to xs.
// Finally we return only elements of ys that are multiples of n. 
//The filter() method takes a callback function that checks if the index plus 1 is divisible by n. If it is, the element is included in the new list.
//The placeholder (_) is used to indicate that the value of the current element is not needed in the callback function

/*Sort the odd
Task
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(arr) {
    let odd = arr.filter(num => num % 2 === 1 || num % 2 === -1)
                .sort((a, b) =>a - b);
    let result = arr.map(num => (num % 2 === 1 || num % 2 === -1) ? odd.shift() : num);    
    return result;
}

// How it works.
// First of all, we create a array of odd numbers (check if reminder is 1 or -1).
// Then we sort it increasingly.
// Finally we do what we are expected of: check the initial array, 
//and if the element is odd, we replace it by the next element of "odd" array,
// and cut the first element of 'odd' array.

/*********/
//There can be easier solution:
// Here we do not check for negatives, 
// sort the "odd" array decreasingly,
// and use .pop() method instead of .shift(), that is better for perfoomance if initial array is large.
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => b - a);
    return array.map((x) => x % 2 ? odd.pop() : x);
}

console.log(sortArray([7, 1, 2])) //[1, 7, 2]
console.log(sortArray([5, 8, 6, 3, 4]))//  =>  [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))//  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
/*Find all occurrences of an element in an array
Given an array (a list in Python) of integers and an integer n, 
find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:

findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/
function findAll(arr, num) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            res.push(i);
        }
    }
    return res;
}
//Tests

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));// => [2, 4]
console.log(findAll([5, 6, 9, 3, 5, 3, 17, 11], 3));// => [3, 5]


//We can either use forEach method:

const findAll = (array, n) => {
    let a = []; array.forEach((v,i)=>{if(v===n){a.push(i)}})
    return a
}

//or map the array: 
const findAll = (arr, n) => arr.map((el, i) => el === n ? i : 'str').filter(e => e !== 'str')
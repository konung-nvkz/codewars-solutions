/*Working with arrays I (and why your code fails in some katas)
In this kata the function returns an array/list of numbers without its last element. 
The function is already written for you and the basic tests pass, but random tests fail.
Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.
Some good reading: MDN Docs about arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

//The easiest solution as it weems is to use arr.slice instead pop method

function withoutLast(arr) {
    return arr.slice(0,-1);
}

/*Here the slice() method is used to extract a portion of an array and returns a new array. 
In this case, the slice() method is called on the input array arr with two arguments: 0 (first element of the array) and -1  (last but one element)
*/

// Below is one more solution.

function withoutLast(arr) {
    if (arr.length==0) return []; //check for empty array, unnecessary in fact
    arr = [...arr]; //copy an array by spread operator to avoid modifying the original array.
    arr.pop(); // mutate the new array and cut the element from it
    return arr;
}

//One more soluton not to mutate an original array is to use filter

function withoutLast(arr) {
    arr = arr.filter((e,i)=> i !== arr.length-1)
    return arr;
}

//Some basic tests: 
console.log(withoutLast([1, 2, 3, 4])); // [1, 2, 3]
console.log(withoutLast([])); // []
console.log(withoutLast(['a', 'b', 'c', 'd', 'e'])); // ['a', 'b', 'c', 'd']
console.log(withoutLast([true, false, true])); // [true, false]
console.log(withoutLast(['apple'])); // []
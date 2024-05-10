/*Making Copies
Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.

Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.

If not a list or array is given as a parameter in interpreted languages, the function should raise an error.

Examples:

t = [1, 2, 3, 4]
tCopy = copyList(t)
t[1] += 5
t = [1, 7, 3, 4]
tCopy = [1, 2, 3, 4]
*/

//Task to use spread operator

function copyList(l){
    return [...l];
}

//In case I forget some day:
//spread operator doesn't return the same array, but a copy of it.

const t = [1, 2, 3, 4];
const tCopy = copyList(t);
t[1] += 5;

console.log(t);       // Output: [1, 7, 3, 4]
console.log(tCopy);   // Output: [1, 2, 3, 4]

/*Please note that the copyList function only creates a shallow copy of the array. 
If the array contains nested objects or arrays, they will still be referenced in the copied array. 
If you need a deep copy, you can use other methods like JSON.stringify() and JSON.parse() or libraries like lodash's cloneDeep().*/
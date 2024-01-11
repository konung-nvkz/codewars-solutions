/*Smallest value of an array
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0

*/
//solution 1
function min(arr, toReturn) {
    let sorted = arr.sort((a, b) => (a - b));
    if (toReturn == 'value') {
        return sorted[0]
    } else if (toReturn == 'index') {
        return arr.indexOf(sorted[0]);
    }
}
//solution 2
function min(arr, toReturn) {
    if (toReturn==='value') return Math.min(...arr)
    return arr.indexOf(Math.min(...arr))
}
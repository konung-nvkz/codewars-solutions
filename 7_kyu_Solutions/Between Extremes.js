/*Between Extremes
DESCRIPTION:
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

*/
let arr = [23, 3, 19, 21, 16];
function betweenExtremes(arr) {
    let x = arr.sort((a,b) => a-b); //let's sort an array
        res = x[x.length-1] - x[0]; //find the difference between the largest and smallest values
    return res; // and return it
};
console.log(betweenExtremes(arr));
/* Find the odd int
DESCRIPTION:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/
let arr = [1,1,2,2,3,3,3,4, 3,3,3,2,2, 17];
//console.log(arr.sort());
function findOdd(arr) {
    arr.sort();//first we sort an array in order repeating numbers stay together
    console.log(arr);
    if(arr[0] !== arr[1]) return arr[0] // we compare first and second elements. 
    //If they are not equal (or there is no second element) the first element will be returned
else {// if first and second element of the array are equal
    arr.splice(0,2) // we remove two elements starting from 0th element with the .splice method
    console.log(arr);
}
    return findOdd(arr) // we continue recursively until we are done
}
console.log(findOdd(arr));
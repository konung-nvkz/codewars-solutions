/*Find the stray number
DESCRIPTION:
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(arr) {
    let set = new Set(arr); // get rid of repeating elements
    let sorted = Array.from(set).sort(); //sort the array of 2 elements
    let count = 0; // initialize the counter

    for (let i = 0; i <=2; i++) { // note that we need to check only three first elements of array
        if (arr[i] == sorted[0]) { // compare the first element of sorted array
            // with 3 first elements of initial array
            count += 1; // add up count if they are equal
        };
    };
    return (count >= 2) ? sorted[1] : sorted[0]; // if we have met the 1st element more then once, it is not the one we need
}
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
Эдя, please find mistakes in code below in order it solves the following task: 
/*Find the unique number
DESCRIPTION:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
    let set = new Set(arr); // get rid of repeating elements
    let sorted = Array.from(set).sort(); //sort the array of 2 elements
    let count = 0; // initialize the counter

    for (let i = 0; i <=2; i++) { // note that we need to check only three first elements of array
        if (arr[i] == sorted[0]) { // compare the first element of sorted array
            // with 3 first elements of initial array
            count += 1; // add up count if they are equal
        };
    };
    return (count >= 2) ? sorted[1] : sorted[0];
    // if we have met the 1st element more then once, it is not the one we need
}


console.log(findUniq([1, 1, 1, 1, 1, 1, 8]));
//easier variant with array methods
function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}
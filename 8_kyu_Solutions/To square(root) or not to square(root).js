/*To square(root) or not to square(root)
DESCRIPTION:
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

function squareOrSquareRoot(arr) {
    let result = [];
    
    for (i=0; i<arr.length; i++) {
        if (Math.sqrt(arr[i]) === Math.round(Math.sqrt(arr[i]))) {
            result.push(Math.sqrt(arr[i]));
        }
        else 
        result.push ((arr[i])**2);
    }

    return result;
}

console.log(squareOrSquareRoott([4,3,9,7,2,1]))// -> [2,9,3,49,4,1]


//Shortened variant: 
function squareOrSquareRoot(array) {
    return array.map(x => {
        const r = Math.sqrt(x);
        return (r % 1 == 0) ? r : (x*x);
    });  
}
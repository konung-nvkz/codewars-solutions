/*Sum of positive
DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
    let result = 0; //initialize the variable for result
    for (i=0; i<arr.length;i++) { // start iterating
        if (arr[i]>0){ // check if element is a positive number
        result+=arr[i]; // if it is, add it up to result
        }
    }
    return result;
}

console.log(positiveSum([1,-4,7,12]));
console.log(positiveSum([]));

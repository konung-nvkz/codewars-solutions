/*Sum a list but ignore any duplicates

DESCRIPTION:
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.*/

function sumNoDuplicates(numList) {
    
    let arr = numList.filter(v=>numList.indexOf(v)===numList.lastIndexOf(v));// remove all duplicates
    //creates a new array (arr) from the given array (numlist) that 
    //contains only the elements that appear only once in the original array.
    let sum = 0; // declare variable we will sum array items in
    for (i = 0; i < arr.length; i++) { // start the counter
        sum = sum + arr[i]; // add up a new value
    }
    return sum;
}
let numList = [3, 4, 3, 6];
console.log(sumNoDuplicates(numList));
console.log(sumNoDuplicates([3, 4, 3, 6]));
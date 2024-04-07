/*Deletion in an array
The deleteValues function takes an array and removes elements that answer true to the pred function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?
*/

/*Code without fix:

function deleteValues(array, pred) {
    for(var i = 0; i < array.length; i++) {
        if ( pred(array[i]) ) {
        array.splice(i, 1);
        }
    }
    return array;
}


The deleteValues function is using a for loop to iterate over the array and remove elements that satisfy the pred function. 
However, when an element is removed using array.splice(i, 1), it changes the length of the array, 
which can lead to incorrect iteration and skipping elements.
To fix thiswe can iterate over the array in reverse order, 
starting from the last index and moving towards the first index. 
This ensures that removing an element does not affect the iteration over the remaining elements.
*/

//Fixed code:

function deleteValues(array, pred) {
    for(var i = array.length - 1; i >= 0; i--) {
        if ( pred(array[i]) ) {
        array.splice(i, 1);
        }
    }
    return array;
}

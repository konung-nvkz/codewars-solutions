/*Calculate average
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function findAverage(array) {
    if (array.length===0) {
        return 0;
    } else {
        return array.reduce((total, current) => total + current, 0) / array.length;}
} 
//We first check array for emptiness, and then count average
/*Largest Elements
DESCRIPTION:
Write a program that outputs the top n elements from a list.

Example:
largest(2, [7,6,5,4,3,2,1])
// => [6,7]*/

function largest(num, arr) {    
    if (num == 0) { // for 0 we return an empty array 
        return [];
    } else { // for oter cases we sort it and return last num elements 
        return arr.sort((a, b) => a-b).slice(-num);
    }    
}
console.log(largest(2, [7,6,5,4,3,2,1]));
console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

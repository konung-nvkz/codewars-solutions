/*Sum without highest and lowest number
DESCRIPTION:
Task
Sum all the numbers of a given array ( cq. list ), 
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, 
even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array,
or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(arr) {
    if (!Array.isArray(arr)) return 0; //check the type of Array - that will cut off null, empty array and those with 1 element
    return [...arr].sort((a,b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0);
}
// create a copy of array[...arr]
// sort it from smalest to largest .sort((a,b) => a - b)
//cut off the first and last element .slice(1, -1)
// nd sum up the rest .reduce((a, b) => a + b, 0)

console.log(sumArray([6, 2, 1, 8, 10]))
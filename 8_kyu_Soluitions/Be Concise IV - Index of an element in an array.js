/*Be Concise IV - Index of an element in an array
Be Concise IV - Index of an element in an array
Task
Provided is a function Kata which accepts two parameters in the following order: 
array, element and returns the index of the element if found and "Not found" otherwise. 
Your task is to shorten the code as much as possible in order to meet the strict character 
count requirements of the Kata. (no more than 161) 
You may assume that all array elements are unique.
*/

function find(array, element) {
    return array.includes(element) ? array.indexOf(element) : "Not found";
}

//use ternary and two methods:
//.includes to check if array contains element 
// .indexOf to give index of element

//to pass all the tests below is shortened variant
function find(a, e) {
    return a.includes(e)?a.indexOf(e):"Not found";
}
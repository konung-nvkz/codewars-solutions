/*Array Deep Count

DESCRIPTION:
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.*/

//This function takes an array (a) as an argument and returns the total number of elements in the array and any sub-arrays. 
function deepCount(a){
    //The variable count is initialized to the length of the array. 
    let count = a.length;
    //A for loop is used to iterate through the elements of the array. 
    //If the element is an array, the deepcount() function 
    // is called recursively to count the elements of the sub-array.
    //The result of the recursive call is added to the count variable. 
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count; //Finally, the count variable is returned.
}
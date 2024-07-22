/*Check three and two
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/
function checkThreeAndTwo(array) {
    let count = {};
    for (let i = 0; i < array.length; i++) {
        if (count[array[i]]) {
            count[array[i]]++;
        } else {
            count[array[i]] = 1;
        }
    }
    let values = Object.values(count);
    return values.includes(3) && values.includes(2);
}
/*This code uses an object called count to keep track of the count of each string in the array.
It iterates through the array and updates the count accordingly. 
Finally, it checks if the count includes both 3 and 2, and returns the result.*/

//Test
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"] ));//true
console.log(checkThreeAndTwo(["a", "a", "b", "b", "b"] ));//true
console.log(checkThreeAndTwo(["a", "a", "a", "a", "b"] ));//false
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"] ));//false
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"]));//false


const checkThreeAndTwo = arr => 
    new Set(arr).size == 2 && 
    [2, 3]
    .includes(arr
        .filter(s => s == arr[0])
        .length);

// First we create a new Set from the input array arr and check if the size of the Set is equal to 2. This ensures that there are exactly two unique values in the array.
// We use the filter method on the input array to create a new array that only contains elements equal to the first element of the input array. This is done using the arrow function s => s == arr[0].
// Then  we check if the length of the filtered array is either 2 or 3 using the includes method on the array [2, 3]. This ensures that there are either two or three elements equal to the first element of the input array.
// If both conditions are true, the code returns true. Otherwise, it returns false
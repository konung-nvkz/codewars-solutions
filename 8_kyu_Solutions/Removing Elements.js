/*Removing Elements
DESCRIPTION:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!

*/

function removeEveryOther(arr){
    let result = [arr[0]]; // create new array that has the 1st element of the initial array
    for (let i = 1; i < arr.length; i++) { // start iterating from the 2nd element (index 1)
        if ((i+1) % 2 === 0) { // if index of the element is even
            continue; // we dn't add it to the array
        }
        result.push(arr[i]); // if it is odd, we add it
    }
    return result;
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

//one more solution
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
        return index % 2 === 0;
    });
}
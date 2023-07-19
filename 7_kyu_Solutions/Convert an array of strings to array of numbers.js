/*Convert an array of strings to array of numbers
DESCRIPTION:
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

// easiest solution
function toNumberArray(stringarray){
    let res = [];
    for (i=0; i< stringarray.length; i++) {
        res.push(+(stringarray[i]));
    }
    return res;
}
// uncomment to see optimized version
// function toNumberArray(stringarray) {
//     return stringarray.map(Number);
// }


console.log(toNumberArray(["1.1", "2.2", "3.3"])); // [1.1, 2.2, 3.3]
console.log(toNumberArray(["4.4", "5.5", "6.6"])); // [4.4, 5.5, 6.6]
console.log(toNumberArray(["7.7", "8.8", "9.9"])); // [7.7, 8.8, 9.9]
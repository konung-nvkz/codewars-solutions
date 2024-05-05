/* Double Every Other
Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]
*/

function doubleEveryOther(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            result.push(arr[i] * 2);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
//Simple test
console.log(doubleEveryOtherEveryOther([1, 2, 3, 4])); // [1, 4, 3, 8]

//Simplified variant with the usage of map.
//Map method also creates a new array.

const doubleEveryOther = (a) => a.map((c,i) => i % 2 == 0 ? c : 2 * c);

//One more variant with the step of 2
// We work on the same array.
function doubleEveryOther(a) {
    for(let i = 1; i < a.length; i += 2) {
      a[i] *= 2;
    }
    return a;
}
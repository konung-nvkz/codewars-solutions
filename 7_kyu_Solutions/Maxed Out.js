/*Maxed Out
For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.

If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

You can assume that you will receive a valid array of numbers.
*/

function maxedOut(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) { 
            res += Math.pow(arr[i], 3);
        }
    }
    return res <= Number.MAX_SAFE_INTEGER ? res : "You've pushed me to the max!";
}
/*Handling of undefined Values:
If the array contains any undefined values (which will happen if the loop condition is incorrect), Math.pow(undefined, 3) will return NaN. 
This should be handled to avoid incorrect results.*/

/*In JavaScript, the maximum value allowed for an integer is defined by the constant Number.MAX_SAFE_INTEGER, which is 9,007,199,254,740,991 (or 2^53 -1)

Explanation of Integer Representation
JavaScript uses the IEEE 754 double-precision floating-point format for all its numbers. 
While it can represent larger numbers, the precision is limited to 53 bits for integer values. This means that:
The maximum safe integer value is Number.MAX_SAFE_INTEGER.
The minimum safe integer value is Number.MIN_SAFE_INTEGER, which is -9,007,199,254,740,992 (or −2^53+1).
Handling Large Integers
For integers larger than Number.MAX_SAFE_INTEGER, JavaScript can still represent them, but it may lose precision. 
To work with arbitrarily large integers, JavaScript provides the BigInt type, which is capable of representing integers of any size. */

//simplify by changing for cycle to reduce method.
function maxedOut(arr) {
    const result = arr.reduce((s, n) => s + Math.pow(n, 3), 0)
    return result > Number.MAX_SAFE_INTEGER ? "You've pushed me to the max!" : result
}
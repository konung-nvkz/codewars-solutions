/*Powers of i

i is the imaginary unit, it is defined by �²=−1
i²=−1, therefore it is a solution to �²+1=0
x²+1=0.

Your Task
Complete the function pofi that returns �i to the power of a given non-negative integer in its simplest form, as a string (answer may contain �i).
*/
// Short explanation how to solve the problem:

/*To calculate i to the power of a non-negative integer, we use the following rules:

i^0 = 1 // as any number in power 0 is 1
i^1 = i
i^2 = -1
i^3 = -i
i^4 = 1
i^5 = i
i^6 = -1
and so on...

We can observe that the powers of i repeat in a cycle of four: 1, i, -1, and -i. 
Therefore, for any non-negative integer n, i^n can be simplified by finding the remainder of n when divided by 4 and applying the corresponding rule from the cycle.

For example:
i^7 can be simplified as i^(4+3), which is equivalent to (i^4) * (i^3). Since i^4 = 1 and i^3 = -i, the simplified form is 1 * (-i) = -i.
*/

function pofi(n) {
    const remainder = n % 4;
    if (remainder === 0) {
        return '1';
    } else if (remainder === 1) {
        return 'i';
    } else if (remainder === 2) {
        return '-1';
    } else {
        return '-i';
    }
}

//Shortest solution:

function pofi(n){
    return ["1","i","-1","-i"][n%4];
}

// Tests
console.log(pofi(0)); // Output: "1"
console.log(pofi(1)); // Output: "i"
console.log(pofi(2)); // Output: "-1"
console.log(pofi(3)); // Output: "-i"
console.log(pofi(4)); // Output: "1"
console.log(pofi(5)); // Output: "i"
console.log(pofi(6)); // Output: "-1"
console.log(pofi(7)); // Output: "-i"
console.log(pofi(8)); // Output: "1"
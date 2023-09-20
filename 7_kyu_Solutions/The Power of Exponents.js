/*The Power of Exponents
DESCRIPTION:
This kata is based on: Exponent Method

Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account negative exponents.

Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

Examples:

power(2, 3)   // 8
power(4, -2)  // 0.0625
*/

function power(base, p) {
    if (p == 0) return 1;
    if (p >=0) {
        return base * power(base, p - 1) 
        // recursion for positive exponent, with every iteration it is decreased
    }
    if (p<0) {
        return base / power(base, -p + 1)
        // recursion for negative exponent, with every iteration it is increased
    }
}

// base variant, that should also work. 
// function power(base, exponent) {
//     let result = 1;
    
//     if (exponent >= 0) {
//       for (let i = 0; i < exponent; i++) {
//         result *= base;
//       }
//     } else {
//       for (let i = 0; i < -exponent; i++) {
//         result /= base;
//       }
//     }
    
//     return result;
//   }

console.log(power(2, 3));
console.log(power(4, -2));


/*Factorial
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

//The longest
function factorial(n) {
    if (n < 0) {
        return -1; // Factorial of a negative number is undefined
    } else if (n === 0) {
        return 1; // Factorial of 0 is 1
    } else {
        return n * factorial(n - 1); // Recursive call to calculate factorial
    }
}

//Shortened to ternary
function factorial(n) {
    return  (n < 0) ? -1 : // Factorial of a negative number is undefined
    (n === 0) ? 1 : // Factorial of 0 is 1
    n * factorial(n - 1); // Recursive call to calculate factorial
}

//Shortened to arrow function
const factorial = (n) => n ? n * factorial (n-1) * n: 1;





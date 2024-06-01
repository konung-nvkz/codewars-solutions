/*Relatively Prime Numbers
Two numbers are relatively prime if their greatest common factor is 1; in other words: if they cannot be divided by any other common numbers than 1.

13, 16, 9, 5, and 119 are all relatively prime because they share no common factors, except for 1. To see this, I will show their factorizations:

    13: 13
    16: 2 * 2 * 2 * 2
    9: 3 * 3
    5: 5
119: 17 * 7
Complete the function that takes 2 arguments: a number (n), and a list of numbers (arr). The function should return a list of all the numbers in arr that are relatively prime to n. All numbers in will be positive integers.

Examples
relatively_prime(8, [1, 2, 3, 4, 5, 6, 7])
>> [1, 3, 5, 7]

relatively_prime(15, [72, 27, 32, 61, 77, 11, 40])
>> [32, 61, 77, 11]

relatively_prime(210, [15, 100, 2222222, 6, 4, 12369, 99])
>> []
*/
//first we write a function to find divisors of number
function findFactors(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
        factors.push(i);
        }
    }
    return factors;
}
//Test and example of usage
// const number = 24;
// const factors = findFactors(number);
// console.log(`Множители числа ${number}: ${factors}`);

//     To solve this problem, you can follow these steps:

// Create a function called relatively_prime that takes two arguments: n and arr.
// Initialize an empty array called result to store the numbers that are relatively prime to n.
// Iterate through each number in the arr using a for loop.
// Inside the loop, check if the greatest common factor (GCF) between n and the current number is 1. You can use the Euclidean algorithm to calculate the GCF.
// If the GCF is 1, add the current number to the result array.
// After the loop, return the result array.


function relativelyPrime(n, arr) {
    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (gcd(n, arr[i]) === 1) {
            result.push(arr[i]);
        }
    }

    return result;
}

    //Tests
    console.log(relatively_prime(8, [1, 2, 3, 4, 5, 6, 7]));  // Output: [1, 3, 5, 7]
    
    console.log(relatively_prime(15, [72, 27, 32, 61, 77, 11, 40]));   // Output: [32, 61, 77, 11]
    
    console.log(relatively_prime(210, [15, 100, 2222222, 6, 4, 12369, 99]));   // Output: [15, 100, 2222222, 6, 4, 12369, 99]

//     The Euclidean Algorithm to Calculate the GCF

// The Euclidean Algorithm is a method used to calculate the Greatest Common Factor (GCF) or Greatest Common Divisor (GCD) of two whole numbers. It is a simple and efficient algorithm that involves repeated division and substitution.

// Here is how the Euclidean Algorithm works:

// Start with two whole numbers, where a is greater than b.
// Divide a by b and find the remainder R. This can be expressed as a ÷ b = c with remainder R.
// Replace a with b and b with R.
// Repeat steps 2 and 3 until R becomes 0. The divisor b in the last equation is the GCF.

// Let's see an example to illustrate the steps of the Euclidean Algorithm:

// Example: Find the GCF of 48 and 36 using the Euclidean Algorithm.

// Start with a = 48 and b = 36.
// Divide 48 by 36: 48 ÷ 36 = 1 with remainder 12.
// Replace a with 36 and b with 12.
// Divide 36 by 12: 36 ÷ 12 = 3 with remainder 0.
// Since the remainder is 0, the GCF is the divisor in the last equation, which is 12.

// Therefore, the GCF of 48 and 36 is 12.
/*Simple Maths Test
Create a function which checks a number for three different properties.

is the number prime?
is the number even?
is the number a multiple of 10?
Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

Examples
numberProperty(7)  // ==> [true,  false, false] 
numberProperty(10) // ==> [false, true,  true] 
The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

numberProperty(-7)  // ==> [false, false, false] 
numberProperty(-10) // ==> [false, true,  true] 
*/

// first of all we add up function to check if number is prime.
// Then we need to return an array with 3 elements:
// arr[0] - check if input is prime
// arr[1] - check if the remainder with division by 2 is true (the number is even)
// arr[2] - check if the remainder with division by 10 is true (the number is a multiple of 10)

function isPrime(n) {
        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) return false;
        }
        return n > 1;
    }
function numberProperty(num) {
    return [isPrime(num), num%2===0, num%10===0];
}
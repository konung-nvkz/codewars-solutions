/*Powers of 2
DESCRIPTION:
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

function powersOfTwo(n){
    return n === 0 ? [1] : [...powersOfTwo(n - 1), 2 ** n]
}

/* some kind of ternary and recursion.
first, we check if n is equal to zero, as every number ^0 is 1 (even two)
Then, we spread the recursive function where n = n-1 to current variant.
Step by step we are getting the result. 

For sure, the easier way to solve the ask would be .push method combined to iterations, but recursion also seems funny.*/
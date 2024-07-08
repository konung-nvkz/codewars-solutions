/*Factorial division
You have to define a function to calculate the division of two factorial numbers. 
This can be useful for large numbers.

In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120.

Some hints: We can see that (n + 1)! = (n + 1) * n!. So (n + 1)! / n! = (n + 1)

We know that 0! = 1 (because n! = (n + 1)! / (n + 1) therefore 0! = 1! / 1 = 1)

And your solution should be able to calculate n! / d!.

*** Please, don't worry about the parameters. You will only receive positive integers, and the first one will be greater than the second one
*/

// - n and d will be positive BigInts, and also n > d. No need to check any of that
function factorialDivision(n, d) {
    let result = 1n;
    for (let i = d + 1n; i <= n; i++) {
        result *= i;
    }
    return result;
}

/*We initialize the result variable to 1, as the factorial of 0 is 1.
We iterate from d + 1 to n and multiply each number to the result variable.
Finally, we return the result variable, which represents the division of n! by d!.
*/

//Recursive solution with ternary (n > d):
const factorialDivision = (n, d) =>
    n <= d
    ? 1n
    : n * factorialDivision(n - 1n, d);
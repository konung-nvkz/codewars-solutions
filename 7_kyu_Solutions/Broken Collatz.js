/*Broken Collatz
The Collatz sequence is a set of numbers formed by taking 
an arbitrary positive integer and applying an operation to it: 
if the number is even, divide it by two, 
and if it's odd, multiply by three and add one. 
Repeat this process, taking the result as the input for the next step, 
until the resulting number is one.

The following function is not working. 
It's purpose is to return the length of any Collatz sequence. Can you fix it?
*/

//to be honest, each line needs corrections

function collatz(n, count=0) { //first of all a count needs to be zeroised
    if (n <= 1) return count+1; // then we need to check not only if n is less than one,
    // but if it is equal to 1 also
    // what is more, the tack is to return one, so we need to return count +1 (we set it a zero initially)
    n = (n % 2 === 0) ? n / 2 : n * 3 + 1; // here we need to check if number is even, not set it as 0
    // so we need to use '===', not ='
        return collatz(n, count + 1); // finally, the function needs to be recursive, and we need to return it.
}
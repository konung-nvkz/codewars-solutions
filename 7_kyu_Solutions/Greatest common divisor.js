/*Greatest common divisor
DESCRIPTION:
Find the greatest common divisor of two positive integers. T
he integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, 
so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

//to make recursive solution we will use euclidian algorithm

function mygcd(a, b) {
    let larger = Math.max(a, b);
    let smaller = Math.min(a,b);

    let remainder = larger%smaller;

    if (remainder==0) {
        return smaller;
    }
    if (remainder!=0) {
        return mygcd(smaller, remainder)
    }
}

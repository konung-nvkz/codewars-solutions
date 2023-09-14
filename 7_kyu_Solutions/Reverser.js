/*Reverser
Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                    '
                    `
                    string
                    fixed
                    precision
                    .keys
*/
//Mathematical way of solving the task
// we take the task into steps:
// first we take the result as 0
// at each iteration we multiply the result by 10 to move the digit to the left
// and add the digit from the remainder of the division by 10
// and change the number to the number/10 minus fraction
// so for 23456 it will look like:
// step one: reversed = 6, n = 2345
// step two: reversed = 65, n = 234
// step three: reversed = 654, n = 23
// step foor: reversed = 6543, n = 2
// step five: reversed = 65432, n = 0
// at step 5 we are done

function reverse(n){
    let reversed = 0;
    while (n !== 0) {
        reversed = (reversed * 10) + (n % 10);
        console.log(reversed);
        n = Math.floor(n / 10);
        console.log(n);
    }
    return reversed;
}

console.log(reverse(23456));
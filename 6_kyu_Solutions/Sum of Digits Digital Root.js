/*Sum of Digits / Digital Root
DESCRIPTION:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/


function digital_root(n) {
    return (n - 1) % 9 + 1;
}

//The digital root of a number is equal to the remainder when that number is divided by 9. 
//If the remainder is 0 and the number is greater than 0, then the digital root is 9. 
//If the number is 0, then the digital root of the number is 0.

//Simple tests
console.log(digital_root(10000));//1
console.log(digital_root(-10));//-1
console.log(digital_root(9));//9
console.log(digital_root(16)); //7
console.log(digital_root(493193));//2
console.log(digital_root(1011000100001));//5
console.log(digital_root(111010110111100110100010101));//5
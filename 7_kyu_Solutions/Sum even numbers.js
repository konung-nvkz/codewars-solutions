/*Sum even numbers

DESCRIPTION:
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
Only numbers without decimals like 4 or 4.0 can be even.
The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/
let arr = [4, 3, 1, 2, 5, 10, 6, 7, 9, 8] 
function sumEvenNumbers(numbers) {
    if (numbers == []) return 0; // make simple check for empty array  
    let sum = 0; // initialize the sum  
    numbers.forEach(number => { //start iterating the array
        if (Number.isInteger(number) && number % 2 === 0) { // check type of each element of the array
          //and check if it is even
            sum += number; // add even numbers to result
    }
    });
      return sum; // return a new array after 
}
console.log(sumEvenNumbers(numbers));


// Explanation:
// - We define a function called sumEvenNumbers that takes an array of numbers as a parameter.
// - We initialize a variable called sum to 0.
// - We use the forEach() method to iterate through each number in the array.
// - For each number, we check if it's an integer (using the Number.isInteger() method) and if it's even (by checking if its remainder when divided by 2 is 0).
// - If the number is both an integer and even, we add it to the sum.
// - After iterating through all the numbers, we return the sum.

// Note: If you want to make the code more concise, 
//you can use arrow functions and a ternary operator instead of an if statement:

const sumEvenNumbers = numbers => {
    let sum = 0;
    numbers.forEach(number => sum += Number.isInteger(number) && number % 2 === 0 ? number : 0);
    return sum;
};
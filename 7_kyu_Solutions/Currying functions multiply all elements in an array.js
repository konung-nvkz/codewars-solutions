/*Currying functions: multiply all elements in an array
DESCRIPTION:
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

Here's a nice Youtube video about currying, which might help you if this is new to you.*/

function multiplyAll (array) {
    function multiply(number) {
        let newArray = [];
        for (i = 0; i < array.length; i++) {
            newArray.push(number * array[i]);
        }
        return newArray;
        }
    return multiply;
}
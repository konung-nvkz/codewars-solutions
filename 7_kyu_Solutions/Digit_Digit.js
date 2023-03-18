/*Digit*Digit
DESCRIPTION:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

function squareDigits(number){
    var moduleNumber = Math.abs(number); // first we find a module to avoid minuses 
    var str = moduleNumber.toString();// then we make a number a string
    var arr = str.split('');//create an array containing digits from the string
    var square = arr.map(function(value) {
        return value * value; // operation of squaring itself
        });
    var join = +square.join(''); //join array into a number
    return join; // return result
}
/* //Shortened variant //
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
} */
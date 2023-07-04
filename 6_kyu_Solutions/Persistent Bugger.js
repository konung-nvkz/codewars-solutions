/*Persistent Bugger.
DESCRIPTION:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative 
persistence, which is the number of times you must multiply the digits in num 
until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

//variant with built-in methods
function persistence(num) {
    var times = 0;
        num = num.toString(); // change the type of number

    while (num.length > 1) {
        times++;
        num = num.split('') // create an array out of number
                .map(Number) //convert each element of an array back to number
                .reduce((a, b) => a * b) // multiply each 
                .toString(); // convert back to string
    }

    return times;
}

//alternative variant with two function.
// first counts the counter while the number has 2+ digits
// the second gets new digits to multiply

function persistence(num) {
    var times = 0;    
    while (num >= 10) {
        times++;
        num = multiplyDigits(num);
    }
    return times;
}

function multiplyDigits(num) {
    var result = 1;
    while (num > 0) {
        result *= num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}

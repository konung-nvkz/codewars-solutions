/*Power of 4
DESCRIPTION:
Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false
*/

function powerOf4(num) {
    if (typeof(num) !== 'number' || num<=0) return false;
    return ((num & (num - 1)) == 0) && (num % 3 == 1);
};
//we first check for type of input and if it is a non-negative number
// function will return true if num is a power of 2 
// and the remainder is 1 when divided by 3
//NB: 1 is also a power of 4. it is 4 powered 0.


console.log(powerOf4(1024)); // returns true
console.log(powerOf4(44)); // returns false
console.log(powerOf4("not a positive integer")); // returns false
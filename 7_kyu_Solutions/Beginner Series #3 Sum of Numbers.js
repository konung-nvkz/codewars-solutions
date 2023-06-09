/*Beginner Series #3 Sum of Numbers
DESCRIPTION:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

const getSum = (x, y) => {
    //we first define min and max of two numbers
    let min = Math.min(x, y),
        max = Math.max(x, y);
    // and then use Gauss formula to get the sum
    return (min + max) * (max - min + 1) / 2;
}

console.log(getSum(-1, 0));

function GetSum(a,b)
{
  return (a+b) * (Math.abs(a - b) + 1) / 2;
}
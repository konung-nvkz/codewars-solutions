/*Calculate Julie's Age

Julie is x years older than her brother, and she is also y times as old as him.

Given x and y calculate Julie's age using the function age(x, y).

For example:

Age(6, 3) // returns 9
Note also that x can be negative, and y can be a decimal.

Age(-15, 0.25) // returns 5
That is, Julie is 15 years younger and 0.25 times the age of her brother.

Do not concern yourself with the imperfections inherent in dividing by floating point numbers, 
as your answer will be rounded. 
Also, for the sake of simplicity, Julie is never the same age as her brother.
*/

function age(x, y){
    return x/(y-1) + x;
}

/* Explanation:
j - Julia
b - brother

according to the task 
j = x + b and j = y * b
let's solve the system of these equations

x + b =  y * b
b * y - b = x
b (y -1) = x
b = x / (y - 1)
j  = x / (y - 1) + x
so to get Julia's age we need to calculate x / (y - 1) + x
 */
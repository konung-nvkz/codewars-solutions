/*One Line: Even Check
DESCRIPTION:
Create a function that accepts a number n as a parameter and returns true if the number is even and false if the number is odd.

Notes:
javascript 1 <= n <= 1000 
 The length of your code must be less than or equal to 19 characters.
You are not allowed to use %.
*/
//very elegant solution found in the net
//first we compare low bit and 1 by code n&1
// if they are equal, we have odd number
//if they are not !(n&1)- we have even number

evenCheck=n=>!(n&1)
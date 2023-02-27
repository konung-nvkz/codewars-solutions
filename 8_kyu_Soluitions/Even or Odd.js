/*Even or Odd
DESCRIPTION:
Create a function that takes an integer as an argument and returns "Even" 
for even numbers or "Odd" for odd numbers.*/

 //a solution with a simple ternary. can be simplified to single string
function evenOrOdd(number) {
    var result = ((number % 2) === 0) ? "Even" : "Odd";
    return result;
}
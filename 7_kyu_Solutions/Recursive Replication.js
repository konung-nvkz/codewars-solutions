/*Recursive Replication
DESCRIPTION:
You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

As tempting as it may seem, do not use loops to solve this problem.
*/

function replicate(times, number) {	  
    if (times <= 0) return [];   // as stated in task condition, If the times argument is negative, we return an empty array.
      return Array(times).fill(number); //we use Array.fill method recursively. 
}
//The fill() method changes all elements in an array to a static value, 
//from a start index (default 0) to an end index (default array.length). 
//It returns the modified array.
//Syntax
//fill(value) 
//fill(value, start)
//fill(value, start, end)
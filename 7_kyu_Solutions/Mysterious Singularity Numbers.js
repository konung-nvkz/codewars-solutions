/*Mysterious Singularity Numbers
DESCRIPTION:
This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

Task
The point is that a natural number N (1 <= N <= 10^9) is given. 
You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].
*/
function realNumbers(n){
    return n - Math.floor(n / 2) - Math.floor(n / 3) - Math.floor(n / 5) + Math.floor(n / 6) + Math.floor(n / 10) + Math.floor(n / 15) - Math.floor(n / 30);
}
console.log(Math.floor(5/2));
console.log(realNumbers(75));
// we use the floor division operator to count the number of integers that are divisible by each of these numbers 
//and subtracts them from n to get the final count. 
//It then adds back the number of integers that are divisible by both 2 and 3, 
//both 2 and 5, 
//or both 3 and 5, since they were counted twice in the previous step. 
//Finally, it subtracts the number of integers that are divisible by 2, 3, and 5, 
// since they were subtracted three times in the previous step but should only be subtracted once. 


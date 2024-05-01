/*Same Birthday Probability
Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). 
Answers should be two decimals unless whole (0 or 1) eg 0.05
*/

function calculateProbability(n) {
    if (n>=365) return 1;
    let probability = 1;
    for (let i = 0; i < n; i++) {
        probability *= (365 - i) / 365;
    }
    return (1 - probability).toFixed(2);    
}
/*Googled solution:
The correct formula for calculating the probability of shared birthdays in a room with n people is:

P(n) = 1 - (365/365) * (364/365) * (363/365) * ... * ((365 - n + 1)/365)

This formula calculates the probability that all n people have different birthdays and subtracts it from 1 to get the probability of at least two people sharing a birthday.*/

/*How the solution works:
First is an obvious case: if there are more than 365 people, the answer will always be 1. This will reduce time needed for calculations.
If the input is less than 365 we initialize the probability variable to 1, which will be multiplied by the probabilities of each person having a different birthday.
The loop iterates from 0 to n-1 and calculates the probability for each person by multiplying (365 - i) / 365 to the probability variable.
Finally, it subtracts the calculated probability from 1 and returns the result rounded to two decimal places using the toFixed(2) method.
*/

console.log(calculateProbability(30)); // Output: 0.71
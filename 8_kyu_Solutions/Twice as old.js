/*Twice as old
DESCRIPTION:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years 
he will be twice as old). 
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // The easiest way to solve the task is below
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
    // explanation: Math.abs gives a result that is always >=0 
    // difference between dad's and son's age is constant
    // e.g. if father have already been twice as old as son, result will be less then 0 
    // and we need Mah.abs to make it more than zero
    // if the case will happen in future, it will be positive
}
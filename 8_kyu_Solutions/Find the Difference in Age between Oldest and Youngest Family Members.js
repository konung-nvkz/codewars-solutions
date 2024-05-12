/*Find the Difference in Age between Oldest and Youngest Family Members
At the annual family gathering, the family likes to find the oldest living family member’s age 
and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) 
with [youngest age, oldest age, difference between the youngest and oldest age].
*/

function differenceInAges(ages){
    let sorted = ages.sort((a, b) => a - b);
    return [sorted[0], sorted[sorted.length - 1], sorted[sorted.length - 1] - sorted[0]];
}

//Simple test
console.log(differenceInAges([82, 15, 6, 38, 35]));//, [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]));//, [14, 99, 85]);

//Same same, but with Math.min and Math.max:
const differenceInAges = ages => {
    const oldest   = Math.max(...ages)
    const youngest = Math.min(...ages)

    return [youngest, oldest, oldest - youngest]
}
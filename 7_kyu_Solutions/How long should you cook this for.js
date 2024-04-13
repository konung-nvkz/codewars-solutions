/*How long should you cook this for?
DESCRIPTION:
You've purchased a ready-meal from the supermarket.

The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.

Oh no, your microwave is 800W! How long should you cook this for?!

Input
You'll be given 4 arguments:

1. needed power
The power of the needed microwave.
Example: "600W"

2. minutes
The number of minutes shown on the package.
Example: 4

3. seconds
The number of seconds shown on the package.
Example: 20

4. power
The power of your microwave.
Example: "800W"

Output
The amount of time you should cook the meal for formatted as a string.
Example: "3 minutes 15 seconds"

Note: the result should be rounded up.

59.2 sec  -->  60 sec  -->  return "1 minutes 0 seconds"
*/
function cookingTime(neededPower, minutes, seconds, power) {

    let np = neededPower.replace(/[^0-9.]/g, '');
    let p = power.replace(/[^0-9.]/g, '');
    let time = Math.ceil((minutes * 60 + seconds) * np / p);

    return `${Math.floor(time / 60)} minutes ${time % 60} seconds`;

}
// some thoughts to recollect in future:
// we use ceil in order to always round up

  // Test cases

console.log(cookingTime("600W", 4, 20, "800W")); // "3 minutes 15 seconds");
console.log(cookingTime("800W", 3, 0, "1200W")); // "2 minutes 0 seconds");
console.log(cookingTime("100W", 8, 45, "50W")); // "17 minutes 30 seconds");
console.log(cookingTime("7500W", 0, 5, "600W")); // "1 minutes 3 seconds");
console.log(cookingTime("450W", 3, 25, "950W")); // "1 minutes 38 seconds");
console.log(cookingTime("21W", 64, 88, "25W")); // "55 minutes 0 seconds");//
console.log(cookingTime("83W", 61, 80, "26W")); // "199 minutes 0 seconds");
console.log(cookingTime("38W", 95, 22, "12W")); // "302 minutes 0 seconds");

// Same same but with parseInt method instead of regex

function cookingTime(neededPower, minutes, seconds, power) {
    var time = Math.ceil((60 * minutes + seconds) * parseInt(neededPower) / parseInt(power));
    return `${Math.floor(time / 60)} minutes ${time % 60} seconds`;
}
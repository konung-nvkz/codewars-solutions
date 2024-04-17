/*NBA full 48 minutes average
An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. 
Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams!
*/

function pointsPer48(ppg, mpg) {    
    return ppg===0 ? 0: Math.round(ppg/mpg*480)/10;
}

//Test cases
console.log(pointsPer48(12, 20)); // 28.8
console.log(pointsPer48(10, 10)); // 48 
console.log(pointsPer48(5, 17)); // 14.1 
console.log(pointsPer48(0, 0)); // 0

// One more solution from different point:

function pointsPer48(ppg, mpg) {
    return +(ppg/mpg*48).toFixed(1)||0
}

//+ converts to number, toFixed(1) rounds to the nearest tenth, || 0 makes answer 0 if we get NaN (case 0, 0, cause division by zero gives NaN)
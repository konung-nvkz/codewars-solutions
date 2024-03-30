/*Measuring Average Speed
Speed is a crucial measure of success for any aspiring warrior, 
so let's write a function to calculate it.

Average Speed is calculated by dividing distance by time. 
Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), 
return a string indicating their speed in miles per hour rounded to the nearest integer.

For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".
*/

function calculateSpeed(distance, time) {
    let meters = parseInt(distance, 10) * (distance.match(/km$/) ? 1000 : 1),
        seconds = parseInt(time, 10) * (time.match(/min$/) ? 60 : 1);

    return Math.round(meters / seconds * 2.23694) + 'mph';
}
/*The calculateSpeed function takes two parameters: distance and time.
The meters variable is calculated by parsing the distance string into an integer using parseInt. It then multiplies the parsed distance by 1000 if the distance string ends with "km" (indicating kilometers), or by 1 if it doesn't. This converts the distance to meters.
The seconds variable is calculated in a similar way. It parses the time string into an integer and multiplies it by 60 if the time string ends with "min" (indicating minutes), or by 1 if it doesn't. This converts the time to seconds.
The speed in meters per second is calculated by dividing meters by seconds.
The speed is then converted to miles per hour by multiplying it by the conversion factor of 2.23694.
Finally, the speed is rounded to the nearest integer using Math.round and concatenated with the string "mph" to indicate the unit of measurement.
*/

//More complicated solution:
/*
function calculateSpeed(distance, time) {
    let distanceCleared = parseFloat(distance.replace(/[^1-9]/g, ""));
    let timeCleared = parseFloat(time.replace(/[^1-9]/g, ""));
    if (distance.includes('km') || time.includes('min')) {
        return Math.round((distanceCleared * 1000) / (timeCleared * 60) * 2.23694) + 'mph';
    }
    return Math.round((distanceCleared) / (timeCleared) * 2.23694) + 'mph';    
}
*/
console.log(calculateSpeed("3km", "5min"));// "22mph"
console.log(calculateSpeed("100m", "10s"));// "22mph"
console.log(calculateSpeed("35m", "293s"));// "0mph"
console.log(calculateSpeed("573km", "39min"));// "548mph"
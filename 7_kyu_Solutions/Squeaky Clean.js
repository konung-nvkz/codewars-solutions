/*Squeaky Clean
Write a solution to cleanup arrays. This can exist entirely in the squeakyClean function or contain multiple helper functions.

Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

Example:

var originalArray = ['click1','click2',null,'','','submitForm'];
the solution you write should return this:

var cleanedArray = ['click1', 'click2','submitForm'] 
*/


//Best practice is to filter an array avoiding falsy values. If we choose Boolean, filter will only leave those that are true.
const squeakyClean = arr => arr.filter(Boolean);


//Another variant using a funcion that checks if we have a falsy value:
function squeakyClean(arr) {
    return arr.filter(function(value) {
        return value !== '' && value !== 0 && value !== null && value !== undefined;
    });
}


//One more variant without filter, iterating array one by one:
function squeakyClean(arr) {
    // Create a new array to store the cleaned values
    var cleanedArray = [];
    // Iterate over the input array
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        // Check if the value is empty, 0, null, or undefined
        if (value !== '' && value !== 0 && value !== null && value !== undefined) {
            // If the value is not empty, 0, null, or undefined, add it to the cleaned array
            cleanedArray.push(value);
        }
    }
    // Return the cleaned array
    return cleanedArray;
}




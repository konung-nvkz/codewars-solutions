/*Remove the time
Task Description
You're re-designing a blog, and the blog's posts have the Weekday Month Day, 
time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.
You're running out of screen real estate, and on some pages you want to display a shorter format, 
Weekday Month Day that omits the time.
Write a function that takes the website date/time in its original string format 
and returns the shortened format.

Input
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output
Output will be the shortened string, e.g., "Friday May 2".
 */

function shortenToDate(longDate) {
    let [result ,] = longDate.split(",")
    return result;
}
//this is how it works:
// comma (,) takes away unnecessary part of the string  
//split method divides the sring into several parts, you only need to fill the divisor


/*below is one more example of destructuring

'use strict';

// первый и второй элементы не нужны
let name = "Юлий Цезарь Император Рима";
let [, , title] = name.split(" ");

console.log(title); // Император*/
/*Selective fear of numbers
DESCRIPTION:
I've got a crazy mental illness. I dislike numbers a lot. 
But it's a little complicated: The number I'm afraid of depends on which day of the week it is... 
This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) 
so it tells the doctor if I'm afraid or not. (return a boolean)
*/

var AmIAfraid = function(day, num) {    
    return (day === "Monday" && num === 12) ||
        (day === "Tuesday" && num > 95) ||
        (day === "Wednesday" && num === 34) ||
        (day === "Thursday" && num === 0) ||
        (day === "Friday" && num % 2 === 0) ||
        (day === "Saturday" && num === 56) ||
        (day === "Sunday" && (num === 666 || num === -666));
};

console.log(AmIAfraid("Monday", 12)); // true
console.log(AmIAfraid("Tuesday", 100)); // true
console.log(AmIAfraid("Wednesday", 34)); // true
console.log(AmIAfraid("Thursday", 0)); // true
console.log(AmIAfraid("Friday", 7)); // false
console.log(AmIAfraid("Saturday", 56)); // true
console.log(AmIAfraid("Sunday", -666)); // true
console.log(AmIAfraid("Sunday", 999)); // false
/*If you can't sleep, just count sheep!!
DESCRIPTION:
If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example, return a string 
with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/
var countSheep = function (num){
    let str = ''; // declare an empty string
    for (i=1; i<=num; i++) { // start iteratively adding to it
        str+=`${i} sheep...`;// the value added is i and the rest part
    }
    return str;
}
console.log(countSheep(3))

//Array methods solution:
const countSheep = length =>
    Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

//Array.from method creates a string with a counter number of sheep
// .join('') makes a string out of array
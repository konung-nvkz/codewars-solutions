/* Divide and Conquer
DESCRIPTION:
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number.

*/

function divCon(x) {
    let numbers = 0, //start the first counter, numbers
        strings = 0; // start the second counter, strings
        //x.map(v => (typeof v === "string" ? (strings += v * 1) : (numbers += v)));
        x.map(v => (typeof v === "string" ? (strings += +v) : (numbers += v)));
        // with .map() method we loop through each element of array with callback function
        //If the value is a string, it converts it to a number by adding + to it
        //and adds it to the strings counter. 
        //Otherwise, it adds the number value to the numbers counter.
    return numbers - strings; // finally we get what we are asked of - return the difference between numbers and strings
}
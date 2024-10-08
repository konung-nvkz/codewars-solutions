/*Grader
Description:
Create a function that takes a number as an argument and returns a grade based on that number.

Score	Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
Examples:

grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"
*/
//Ternary Syntax Solution

function grader(score) {
    if (!isFinite(score)) throw new Error(`Score should be a number`)
        
    return (score > 1 || score < 0.6) ? "F" :
            (score >= 0.9) ? "A" :
            (score >= 0.8) ? "B" :
            (score >= 0.7) ? "C" :
            (score >= 0.6) ? "D" : "F"; // This handles any case not covered above
    }

// Examples
console.log(grader(0));    // "F"
console.log(grader(1.1));  // "F"
console.log(grader(0.9));  // "A"
console.log(grader(0.8));  // "B"
console.log(grader(0.7));  // "C"
console.log(grader(0.6));  // "D"

//Switch Case Solution
function grader(score) {
    switch (true) {
        case (score > 1 || score < 0.6):
            return "F";
        case (score >= 0.9):
            return "A";
        case (score >= 0.8):
            return "B";
        case (score >= 0.7):
            return "C";
        case (score >= 0.6):
            return "D";
        default:
            return "F"; // This handles any case not covered above
    }
}
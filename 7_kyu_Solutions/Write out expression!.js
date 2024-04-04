/*Write out expression!
Math hasn't always been your best subject, and these programming symbols always trip you up! I mean, does ** mean "Times, Times" or "To the power of"? 
Luckily, you can create the function to write out the expressions for you!

The operators you'll need to use are:

"+"   -->  "Plus"
"-"   -->  "Minus"
"*"   -->  "Times"
"/"   -->  "Divided By"
"**"  -->  "To The Power Of"
"="   -->  "Equals"
"!="  -->  "Does Not Equal"
Notes:

the input will always be given as a string, in the following format: number space operator space number; for example: "1 + 3" or "2 - 10"
the numbers used will be 1 to 10
the valid operators and the relevant texts are stored in the preloaded dictionary/hash OPERATORS
invalid operators will also be tested, to which you should return "That's not an operator!"
Examples
"4 ** 9"  -->  "Four To The Power Of Nine"
"10 - 5"  -->  "Ten Minus Five"
"2 = 2"   -->  "Two Equals Two"
"2 x 3"   -->  "That's not an operator!"
Good luck!
*/

// To solve the issue, we need to follow several steps.

// First, create a function that takes a number as input and returns it as text from an array:
function numberToText(number) {
    const numbersAsText = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
    ];

    return numbersAsText[number];
}

// Next, create the main function to write out the expressions:
function expressionOut(expr) {
    // Declare the list of possible operators
    const OPERATORS = {
        "+": "Plus",
        "-": "Minus",
        "*": "Times",
        "/": "Divided By",
        "**": "To The Power Of",
        "=": "Equals",
        "!=": "Does Not Equal",
    };

    // Split the expression into parts
    // According to the task, there will always be 3 parts (indexed from 0 to 2);

    const parts = expr.split(" ");
    const operator = parts[1];

    // Check if the operator is valid
    if (OPERATORS.hasOwnProperty(operator)) {
        const num1 = Number(parts[0]);
        const num2 = Number(parts[2]);
        const operatorText = OPERATORS[operator];

        // Return the expression as text
        return `${numberToText(num1)} ${operatorText} ${numberToText(num2)}`;
    } else {
        // Return an error message for invalid operators
        return "That's not an operator!";
    }
}

//Some tests

console.log(expressionOut("4 ** 9"));  // Output: "Four To The Power Of Nine"
console.log(expressionOut("10 - 5"));  // Output: "Ten Minus Five"
console.log(expressionOut("2 = 2"));   // Output: "Two Equals Two"
console.log(expressionOut("2 x 3"));   // Output: "That's not an operator!"

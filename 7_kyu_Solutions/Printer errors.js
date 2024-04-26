/*Printer errors 
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, 
one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

*/
//To solve this task, we can:

//Initialize a variable to keep track of the number of errors.
//Iterate over each character in the control string.
//Check if the character is not in the range 'a' to 'm' (so it is in range 'n' to 'z'). If it is not, increment the error count.
//After iterating over all characters, return the error count as a string, followed by a slash ("/"), and the length of the control string.


const printerError = (str) => `${(str.match(/[n-z]/g) || []).length}/${str.length}`;

//Test without tests:

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));//   "3/56"
console.log(printerError("aaaaaaataaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm"));//   "1/48"

//The other solution is to delete all a-m symbols and to show the length of the result string as a count;
/*const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;*/
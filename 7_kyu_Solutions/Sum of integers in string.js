/*Sum of integers in string
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

function sumOfIntegersInString(str) {
    // Use regular expression to extract integers from the string
    const regex = /\d+/g;
    const matches = str.match(regex);

    // Check if matches exist
    if (matches) {
      // Convert the matched strings to integers and calculate the sum
        const sum = matches.reduce((acc, numStr) => acc + parseInt(numStr), 0);
        return sum;
    } else {
      return 0; // No matches found, return 0
    }
} 
const str = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog";
const sum = sumOfIntegersInString(str);
console.log(sum); // Output: 3635

function sumOfIntegersInString(s) {
    return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
  }
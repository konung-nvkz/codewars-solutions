/*British vs Slovakian postcodes
Task
Write a function called which_postcode/whichPostcode that takes a string, and determines whether it represents a British or Slovakian postcode. 
If the string is a valid British postcode, return "GB". If it's a valid Slovakian postcode, return "SK". 
If the input is neither a valid British nor a valid Slovakian postcode, return "Not valid".

Leading and trailing spaces should be ignored, but if there are spaces in wrong place in the middle of the postcode, then it is invalid.

The input will always be a valid British postcode, a valid Slovakian postcode or an invalid postcode.

British Postcodes
To be considered valid, a British postcode must follow the rules below:

Consists a mix of letters and numbers, seperated to two segments by a single space.
First segment must start with either 1 or 2 letters, followed by 1 or 2 numbers. Example: G4, G40, DN4 or DN11
Second segment must start with a digit, followed by 2 letters. Example: 1AB
British postcodes are not case-sensitive, so Se21 7aA is a valid postcode.

Slovakian Postcodes
Consists of 5 numbers, where the first 3 are seperated by a space from the last 2 numbers. Example: 123 45.
Examples
Valid British postcodes:
  G4 7AH
G12 8NU   
Dn1 1aA
SE21 7AA
Valid Slovakian postcodes:
 040 01
810 08  
984 59
Invalid postcodes:
0765 820 - Should only have 3 numbers in the first segment, 2 numbers in the second segment
SE 21 7AA - Should only contain 2 segments
070  08 - Should have single space separating the two segments, not double space
*/

function checkInputValidity(input) {
    // Check for 3 numbers in the first segment and 2 numbers in the second segment
    const segments = input.split(" ");
        if (segments.length !== 2 || segments[0].length !== 3 || segments[1].length !== 2) {    
            return "Not valid";  
        }  

        // Check for more than one space in the input
        if (input.match(/\s/g).length > 1) {
            return "Not valid";  
        }
        // Check for double spaces in the input
        if (input.includes("  ")) {
            return "Not valid";  
        }
        // If all checks pass, return "Valid"
        return "Valid";
}

// Example usage:
console.log(checkInputValidity("0765 820")); // Not valid
console.log(checkInputValidity("SE 21 7AA")); // Not valid
console.log(checkInputValidity("070  08")); // Not valid
console.log(checkInputValidity("123 45")); // Valid


function whichPostcode(str) {
    const validity = checkInputValidity(str);

    if (validity === "Valid") {
        // Check if the input string is a valid British postcode
        if (str.match(/[A-Za-z]{1,2}\d{1,2}\s\d[A-Za-z]{2}/)) {
            return "GB";
        }
        // Check if the input string is a valid Slovakian postcode
        if (str.match(/\d{3}\s\d{2}/)) {
            return "SK";
        }
    }

    // If the input string is not a valid British or Slovakian postcode, return "Not valid"
    return "Not valid";
}

//Tests
console.log(whichPostcode("G4 7AH")); // GB
console.log(whichPostcode("G12 8NU")); // GB
console.log(whichPostcode("Dn1 1aA")); // GB
console.log(whichPostcode("SE21 7AA")); // GB
console.log(whichPostcode("040 01")); // SK
console.log(whichPostcode("810 08")); // SK
console.log(whichPostcode("984 59")); // SK
console.log(whichPostcode("0765 820")); // Not valid
console.log(whichPostcode("SE 21 7AA")); // Not valid
console.log(whichPostcode("070  08")); // Not valid
console.log(whichPostcode("123 45")); // Not valid


const {assert} = require("chai");

describe("Sample tests", function() {
  it("should return 'GB' for valid British postcode", function() {
    assert.strictEqual(whichPostcode("DN1 1AA"), "GB", "DN1 1AA");
  });
  it("should return 'SK' for valid Slovakian postcode", function() {
    assert.strictEqual(whichPostcode("040 01"), "SK", "040 01");
    assert.strictEqual(whichPostcode("070 08"), "SK", "070 08");
  });
  it("should return 'GB' for valid British postcode with leading or tailing spaces", function() {
    assert.strictEqual(whichPostcode("G4 7Ah  "), "GB", "G4 7Ah  ");
  });
  it("should return 'SK' for valid Slovakian postcode with leading or tailing spaces", function() {
    assert.strictEqual(whichPostcode("  810 08"), "SK", "  810 08");
  });
  it("should return 'Not valid' for invalid British postcode", function() {
    assert.strictEqual(whichPostcode("G4  7AH"), "Not valid", "G4  7AH");
    assert.strictEqual(whichPostcode("12 8NU"), "Not valid", "12 8NU");
    assert.strictEqual(whichPostcode("DN1 AAA"), "Not valid", "DN1 AAA");
    assert.strictEqual(whichPostcode("SE21 AA7"), "Not valid", "SE21 AA7");
    assert.strictEqual(whichPostcode("SE217AA"), "Not valid", "SE217AA");
  });
  it("should return 'Not valid' for invalid Slovakian postcode", function() {
    assert.strictEqual(whichPostcode("810  08"), "Not valid", "810  08");
    assert.strictEqual(whichPostcode("40 01"), "Not valid", "40 01");
    assert.strictEqual(whichPostcode("04001"), "Not valid", "04001"); 
  });
});
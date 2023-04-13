/*Regex Password Validation
DESCRIPTION:
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

//short explanation of how it works
// ^ - beginning of the string
// (?=.*\d) - string must have at least one digit
// (?=.*[a-z]) - string must have at least on lowerCased letter
// (?=.*[A-Z]) - string must have at least on UpperCased letter
// [0-9a-zA-Z]{6,} - string must consist of letters and digits only 
// and have length of at least 6 symbols
// $ end of the line


/******/
//open tests from codewars
const {instanceOf, strictEqual} = require('chai').assert;

function doTest (string, expected) {
	const actual = REGEXP.test(string);
	const log = `"${string}" is${expected ? '' : ' not'} a valid password\n`;
	strictEqual(actual, expected, log);
}

describe("Tests suite", () => {
	it("sample tests", () => {
		doTest('fjd3IR9', true);
		doTest('ghdfj32', false);
		doTest('DSJKHD23', false);
		doTest('dsF43', false);
		doTest('4fdg5Fj3', true);
		doTest('DHSJdhjsU', false);
		doTest('fjd3IR9.;', false);
		doTest('fjd3  IR9', false);
		doTest('djI38D55', true);
		doTest('djI3_8D55', false);
		doTest('djI38D55@@', false);
	});
});


// here is how this also can be solved within a single function
function validate(password) {
    const Upper = password.match(/[A-Z]/); // check that passwd contains upper case elements
    const Lower = password.match(/[a-z]/);// check that passwd contains lower case elements
    const Number = password.match(/\d/);// check that passwd contains digits
    const Length = password.length > 5; // has length of 6+ characters
    if (password.replace(/[\d\w]/gi, "").length > 0) return false; //if there are non-alphanumeric characters (note that '_' is not alphanumeric) it won't go
    return Upper && Lower && Number && Length; //if it contains everything needed it is a passwd we need
};
console.log(validate('fjd3IR9')); // true)
console.log(validate('We4ry')); // false
console.log(validate('We4ry!'));// false
console.log(validate('We4ryry')); // true



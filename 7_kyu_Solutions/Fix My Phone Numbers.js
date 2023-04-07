/*Fix My Phone Numbers!

DESCRIPTION:
Fix My Phone Numbers
Oh thank goodness you're here! The last intern has completely ruined everything!
All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!

The Format
Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' 
and must always start with a 0.
However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!
For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

The Task
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' 
with no whitespace or special characters, else return "Not a phone number".
*/
let string = 'efRFS:)0207ERGQREG88349F82!';

function isItANum(str) {
    let arr = str.split(''); // create an array out of inpted string
    var check = []; // create an empty array we will fill in with numbers
    for (i = 0; i <arr.length; i++) { // start iterating the array
        if (+arr[i] == arr[i] && arr[i] != ' '){  // take all number from it(other symbols and spaces are not taken)       
            check +=arr[i]; // and add numbers to an emty array
        }
    }
    // check number for validity: check the length of the array and the 1st symbol to be zero
    // and return either a number or an error message
    return (check[0]==0 && check.length == 11) ? check : "Not a phone number"; 
};

//some examples from tests
console.log(isItANum(string));
console.log(isItANum('S:)0207ERGQREG88349F82!efRF'));
console.log(isItANum('sjfniebienvr12312312312ehfWh'));
console.log(isItANum("0192387415456"));
console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"));

//The same with regexp

// function isItANum(str) {
//     let num = str.match(/\d/g).join("");
//     return /^0\d{10}$/.test(num) ? num : "Not a phone number";
// }

// The same with.filter method
// function isItANum(s) {
//     let r = s.split('').filter(c=>'0123456789'.includes(c)).join('')
//     return r.length==11 && r[0]=='0' && r || "Not a phone number"
// }

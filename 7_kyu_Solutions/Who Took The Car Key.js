/*Who Took The Car Key?
DESCRIPTION:
You woke up from a massive headache and can't seem to find your car key. 
You find a note with a clue that says:

"If you're reading this then I have left the state and am well on my way to freedom. 
Just to make things interesting, I have also provided something for you to track me with. 
Let the chase begin..."

Given an array of binary numbers, figure out and return the culprit's message 
to find out who took the missing car key.

['01000001', '01101100', '01100101', '01111000', '01100001', 
'01101110', '01100100', '01100101', '01110010'] => 
'Alexander'
*/

function whoTookTheCarKey(message) {
    return message.map(binaryLetter => 
        String.fromCharCode(
        parseInt(binaryLetter, 2)))
        .join('');
}
console.log(whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', 
'01101110', '01100100', '01100101', '01110010']));

const message1 = ['01000101', '01100111', '01101111', '01110010']; // ['E', 'g', 'o', 'r']
console.log(whoTookTheCarKey(message1)); // Output: 'Egor'

const message2 = ['01010100', '01100001', '01101110', '01111001', '01100001']; // ['T', 'a', 'n', 'y', 'a']
console.log(whoTookTheCarKey(message2)); // Output: 'Tanya'

const message3 = ['01010100', '01100101', '01110011', '01110100']; // ['T', 'e', 's', 't']
console.log(whoTookTheCarKey(message3)); // Output: 'Test'

const message4 = ['01000001', '01100010', '01101001', '01110010', '01110110', '01100001', '01101100', '01100111']; // ['A', 'b', 'i', 'r', 'v', 'a', 'l', 'g']
console.log(whoTookTheCarKey(message4)); // Output: 'Abirvalg'

//some comments n how the code works (for me not to forget)
//. message.map(binaryLetter => String.fromCharCode(parseInt(binaryLetter, 2))) 
// .map creates a new array with letters insted of binary
// every binaryLetter from 'message' array becomes a symbol by parseInt (we get a decimal number) 
//and String.fromCharCode (gets a symbol from decimal number).

// .join('')  - new array becomes a string
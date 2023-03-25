/*Convert boolean values to strings 'Yes' or 'No'.
DESCRIPTION:
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/


function boolToWord(boolean){
    return boolean ? 'Yes':'No'; // simply use ternary in order we can avoid ifelses
}
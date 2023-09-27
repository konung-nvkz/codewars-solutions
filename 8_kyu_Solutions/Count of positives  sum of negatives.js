/*Count of positives / sum of negatives
DESCRIPTION:
Given an inputay of integers.

Return an inputay, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty inputay or is null, return an empty inputay.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

FUNDAMENTALSinputAYSLISTS
*/
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function  countPositivesSumNegatives(input) {
    if (input.length == 0 ||input == null) return [];    
    
    let count = 0;
    let sum = 0;
    for (i=0; i<input.length; i++) {
        if (input[i]===Math.abs(input[i])) {
            count+=1;
        } else {
            sum+=input[i];
        }
    }  

    return [count, sum];
}
console.log( countPositivesSumNegatives(input));

function countPositivesSumNegatives (A) {
    if (!A || !A.length) return [] // check if we've got an emty array
    let pos = A.filter(x=>x>0), // add up to positive list
        neg = A.filter(x=>x<=0) //add up to list of the others - both negative and zeros
    return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]
    // show the result, where
    // pos.length is the count of all positives
    // Math.floor(neg.reduce((s,v)=>s+v,0)  is sum of negative numbers
    // to be more exact, we first reduce the 2nd array summing up elements 
    //and thus taking out all zeros from it
    // and then round down the resut by Math.floor
}
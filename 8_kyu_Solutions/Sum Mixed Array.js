/*Sum Mixed Array
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.
Return your answer as a number.
*/

function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return sum;
}


//The same with reduce: 
function sumMix(x) {
    return x.reduce((sum, num) => sum + Number(num), 0);
}
//Tests

console.log(sumMix([9, 3, '7', '3']));// 22
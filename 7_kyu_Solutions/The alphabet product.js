/*The alphabet product
I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. 
Your task is to return the value of D.
*/

function alphabet(ns) {
    let result = Array.from(new Set(ns)).sort((a, b) => a-b);
    //return result;//
    return result[3];
}
console.log(alphabet([2,3,4,1,12,6,2,4]))//, 4 );)

console.log(alphabet([2,6,7,3,14,35,15,5]))//, 7 );

return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]

function alphabet(ns) {
    const arr = ns.sort((a, b) => a - b);
    // Delete AxB
    let ab = arr.find((e) => e === arr[0] * arr[1]);
    arr.splice(arr.indexOf(ab), 1);
    // A and B are first two numbers, CxD is the greatest. Delete A, B and CxD
    let newArr = arr.slice(2, 6);
    //now we have  C , D, BxC DxA. C is smallest
    let c = newArr[0];
    //return to first array and find D from CxD (the biggest -the last one)
    return arr[6] / c;
}
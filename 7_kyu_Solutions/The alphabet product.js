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
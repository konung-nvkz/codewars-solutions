/*Debug the functions EASY
Debug the functions
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
*/
function multi(arr) {
    return arr.reduce((a, b) => a * b)
}
function add(arr) {
    return arr.reduce((a, b) => a + b)
}
function reverse(str) {
    return str.split('').reverse().join('')
}
  //small explanation. 
  // Initial fnctions could work for 2 elements, while 3 or more would give wrong result
  //thus we need to use reduce method with callback. It will take away the limitation
  // as for reversing string, we needed to make the string and array, reverse it and make it a string again

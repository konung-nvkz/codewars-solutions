/*Palindromes Here and There
DESCRIPTION:
An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

For example:

[101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
[45, 21, 303, 56]        ==>  [0, 0, 1, 0]
*/

function convertPalindromes(arr) {
    let result = []; //create an empty array for output
    for (i=0; i<arr.length; i++){
        if (arr[i]===+arr[i].toString().split('').reverse().join(``)) { 
            //check if array made of the string, 
            // revesed, and sticked back to string 
            // is equal to original string
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
};
console.log(convertPalindromes([101, 2, 85, 33, 14014]));

function isPalindrome(x) {
    x = x.toUpperCase(); // will do all the symbols upper cased (or lower cased, doesn't matter)
    return x===x.split(``).reverse().join(``); 
    //(will ) check if array made of the string, 
    // revesed, and sticked back to string 
    // is equal to original string
}

function convertPalindromes(numbers) {
    return numbers.map(v=>v===[...v.toString()].reverse().join``*1?1:0)
};

function convertPalindromes(numbers) {
    let newArr = [];
    
    for (let i = 0; i < numbers.length; i++) {
      
      let str = numbers[i].toString();
      let reversedNum = str.split('').reverse().join('');
      
      if (+reversedNum === numbers[i]) {
         newArr.push(1);
      }
      else {
         newArr.push(0);
      }
    }
    
    return newArr;
  };
  
  
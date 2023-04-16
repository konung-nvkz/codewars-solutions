/*Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    x = x.toUpperCase(); 
      // will do all the symbols of the input upper cased
      //(or lower cased, doesn't matter)
    return x===x.split(``).reverse().join(``); 
      //(will ) check if array made of the string, 
      // revesed, and sticked back to string 
      // is equal to original string
}
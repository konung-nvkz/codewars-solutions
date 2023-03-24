/*Changing letters
When provided with a String, capitalize all vowels

For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/

function swap (str) {
    return str.replace(/[aeuio]/gi,$1=>$1.toUpperCase()) // use regExp to find vowels and arrow function to change it one by one to Upper case
}
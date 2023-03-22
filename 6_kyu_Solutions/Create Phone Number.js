/*Create Phone Number
DESCRIPTION:
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(arr) {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}
// we add up array elements one by one with necessary symbols added
// doing so, we need to be careeful and not to add up any unnecessar symbols
console.log(createPhoneNumber(arr));

//one more easier solution
// we use .slice and .join methods

/*function createPhoneNumber(numbers){
    return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
}

//NB:
//The slice() method returns a shallow copy of a portion of an array into a new array object 
//selected from start to end (end not included) 
//where start and end represent the index of items in that array. 
//The original array will not be modified.

//The join() method creates and returns a new string
//by concatenating all of the elements in an array (or an array-like object), 
//separated by commas or a specified separator string. 
//If the array has only one item, then that item will be returned without using the separator.

*/
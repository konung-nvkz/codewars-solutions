// TODO
/*Array Helpers
DESCRIPTION:
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]*/

// Here is a solution with come comments:
//code defines several new methods for the Array prototype. 

//The square method returns a new arr with the square of each element in the original array. 
// we use .map method to iterate over each element in the array and apply the squaring operation.
Array.prototype.square = function() {
    return this.map(function(value) {
      return value * value; // operation of squaring itself
    });
  }
  //The cube method returns a new array with the cube of each element in the original array. 
  //Quite the same as previous - .map to iterate over each element and the cubing operation.
  Array.prototype.cube = function() {
    return this.map(function(value) {
      return value * value * value;
    });
  }
  //The average method calculates the average of all the elements in the array. 
  //first we take .reduce method to sum up all the elements 
  // and then divide the sum by the length of the array.
  Array.prototype.average = function() {
    if (!this.length) return NaN;
    var total = this.reduce(function(lastValue, thisValue) {
      return thisValue + lastValue;
    });
    return total / this.length;
  }

//The sum method returns the sum of all the elements in the array. 
//Again we use .reduce method.
  Array.prototype.sum = function() { // define a method
    return this.reduce(function(lastValue, thisValue) { // apply .reduce for each element of the array
      return thisValue + lastValue; //function that is applied to each element of the array. It takes the current element (thisvalue) and adds it to the accumulated value (lastvalue).
    });
  }

//he even method returns a new array with only the even elements from the original array. 
// We here take .filter method to iterate over each element in the array and return only the even elements.
  Array.prototype.even = function() {
    return this.filter(function(value) {
      return value % 2 == 0;
    });
  }

  //The odd method returns a new array with only the odd elements from the original array. 
  //It uses the .filter method to iterate over each element in the array and return only the odd elements. 
  Array.prototype.odd = function() {
    return this.filter(function(value) {
      return value % 2 != 0; 
    });
  }

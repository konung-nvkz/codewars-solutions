/*Get key-value pairs as arrays

DESCRIPTION:
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

ARRAYSFUNDAMENTALS*/

// first let's write an arrow function using .keys and .values methods
const keysAndValues = data => [Object.keys(data), Object.values(data)]

// we can also write the same with a usual function:

// function keysAndValues(data){
//   // TODO: complete
//   let keys = Object.keys(data);
//   let values = Object.values(data);
//   return  [keys, values];
// }
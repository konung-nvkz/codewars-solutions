/*Slice the middle of a list backwards
Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.
*/

function reverseMiddle(array) {
    if (array.length < 4) {
        return "List should have at least four elements.";
    }
    
    const middleIndex = Math.floor(array.length / 2);
    let middleElements;

    if (array.length % 2 === 0) {
        middleElements = array.slice(middleIndex - 1, middleIndex + 1);
    } else {
        middleElements = array.slice(middleIndex - 1, middleIndex + 2);
    }

    return middleElements.reverse();
}

console.log(reverseMiddle([1, 2, 3, 4])); // [3, 2]
console.log(reverseMiddle([1, 2, 3, 4, 5])); // [4, 3, 2]

// The same with ternary:

function reverseMiddle(array) {
    return array.length < 4
        ? "List should have at least four elements."
        : array.length % 2 === 0
        ? array.slice(Math.floor(array.length / 2) - 1, Math.floor(array.length / 2) + 1).reverse()
        : array.slice(Math.floor(array.length / 2) - 1, Math.floor(array.length / 2) + 2).reverse();
    }
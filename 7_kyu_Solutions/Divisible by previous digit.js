/*Divisible by previous digit?
Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

Examples
73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]
*** Remember 0 is evenly divisible by all integers but not the other way around ***
*/

function divisibleByLast(num) {
    const digits = Array.from(String(num), Number);
    const result = [false];

    for (let i = 1; i < digits.length; i++) {
        if (digits[i] % digits[i - 1] === 0) {
        result.push(true);
        } else {
        result.push(false);
        }
    }

    return result;
}

//Tests from the task:
console.log(divisibleByLast(73312)); // Output: [false, false, true, false, true]
console.log(divisibleByLast(2026)); // Output: [false, true, false, true]
console.log(divisibleByLast(635)); // Output: [false, false, false].

//One more variant:

const divisibleByLast = n => {
    return n.toString()
        .split('')
        .map((el, ind, arr) => el % arr[ind - 1] === 0);
}

// The  code defines a function called divisibleByLast that takes a number n as input. 
// The function converts the number to a string using the toString() method, 
// splits the string into an array of individual characters using the split('') method, 
// and then applies the map() method to the array.

// Inside the map() method, an arrow function is used to iterate over each element (el) of the array, along with its index (ind) and the array itself (arr). 
// The arrow function checks if the current element (el) is divisible by the previous element (arr[ind - 1]) by using the modulo operator (%). 
// If the condition is true, it returns true; otherwise, it returns false.

// Finally, the map() method returns an array of boolean values indicating whether each element is divisible by the previous element.
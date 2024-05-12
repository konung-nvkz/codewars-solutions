/*Guess the Sequence
You have read the title: you must guess a sequence. It will have something to do with the number given.

Example
x = 16

result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
Good luck!
*/

function sequence(x) {
    const sequence = [];
    
    for (let i = 1; i <= x; i++) {
        sequence.push(i);
    }
    
    return sequence.sort();
}

//Note. We need to use .sort() method without .sort((a, b) => a - b);
// In this case it will give tte sequense from 1 to 9 if there are less than 9 elements, and sort like it is in exmple if there are 10+ elements.

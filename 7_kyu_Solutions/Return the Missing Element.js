/*Return the Missing Element
DESCRIPTION:
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/
function getMissingElement(sequence) {
    // Create an array to keep track of the presence of each number from 0 to 9
    const presence = Array(10).fill(false);
    
    // Iterate over the sequence and mark the presence of each number
        for (let num of sequence) {
            presence[num] = true;
        }
    
        // Find the missing element by checking which number is not present
        for (let i = 0; i < presence.length; i++) {
            if (!presence[i]) {
                return i;
            }
        }

        // If all numbers are present, return -1 (indicating no missing element)
        return -1;
}
const sequence1 = [ 5, 1, 3, 2, 9, 7, 6, 4, 8];
console.log(getMissingElement(sequence1)); // Output: 8

const sequence2 = [9, 2, 4, 5, 7, 0, 8, 6, 1];
console.log(getMissingElement(sequence2)); // 

// One clever solution.
// As we know, sum of all digits from 0 to 9 is 45
//  So we can sum up all the numbers in array and take this number from 45 to get the result

function getMissingElement(superImportantArray){
    var addElements = 0;
    for (i=0;i<superImportantArray.length;i++) {
        addElements+=superImportantArray[i];
    }
    return 45 - addElements;
}

//The same but with reduce function 

function getMissingElement(superImportantArray) {
    return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
}
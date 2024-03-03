/*Reversing Fun
You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

Let's say you start with this: "012345"

The first thing you do is reverse it:"543210"
Then you will take the string from the 1st position and reverse it again:"501234"
Then you will take the string from the 2nd position and reverse it again:"504321"
Then you will take the string from the 3rd position and reverse it again:"504123"

Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

Input:
A string of length 1 - 1000

Output:
A correctly reordered string.
*/

function flipNumber(str) {    
    let arr = Array.from(str);

    for (let i = 0; i < arr.length; i++) {
        arr = arr.slice(0, i)
                .concat(arr.slice(i)
                .reverse());
    }
    return arr.join("");
}

//Small note on what happens inside the loop.
//We first slice the array into two parts: 
// the subarray before the current position (arr.slice(0, i)) 
// and the subarray starting from the current position (arr.slice(i)). 
//We then reverse the second subarray using the reverse() method 
//and concatenate the two subarrays back together using the concat() method.


console.log(reverseFun("012345")); // Output: "504132"


// Easier solution:

function reverseFun(str) {
    // Convert the input string to an array
    let arr = Array.from(str);

    let left = 0;
    let right = arr.length - 1;

    // Iterate until the two pointers meet
    while (left < right) {
      // Swap the characters at the left and right positions
    [arr[left], arr[right]] = [arr[right], arr[left]];

      // Move the pointers towards the center
        left++;
        right--;
    }

    // Join the array elements back into a string and return the result
    return arr.join("");
}

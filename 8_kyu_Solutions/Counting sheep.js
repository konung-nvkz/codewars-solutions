/*Counting sheep...
DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
let arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

function countSheep(arr) {
    count = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i]==true) 
        count++;
    }
    return count;
};

// to be honest, tis can be done in one line with ternary, 
// but I am too lazy to think over it today
console.log(countSheep(arr));
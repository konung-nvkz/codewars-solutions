/*Sum - Square Even, Root Odd
DESCRIPTION:
Complete the function that takes a list of numbers (nums), as the only argument to the function. 
Take each number in the list and square it if it is even, or square root the number if it is odd. 
Take this new list and return the sum of it, rounded to two decimal places.
The list will never be empty and will only contain values that are greater than or equal to zero.
Good luck!

*/
//let nums = [1, 2, 3, 4, 5, 6, 0, 7, 6, 4]
function sumSquareEvenRootOdd(nums) {
    let result = 0;  //initialize the counter
    for (let i=0; i<nums.length; i++) { //start iterating through the array of nums
        if (nums[i]%2==0) { // if the resule is even
            result += nums[i]**2; // we square it and add to the result. 
            //This case also takes zero, but who cares? At least 0**2 is also zero
        } else {
            result += Math.sqrt(nums[i]); //square root of odd number is also added to the result
        }
    }    
    return +result.toFixed(2); // we round the result totwo decimals and change the type to number by "+"
};

//console.log(sumSquareEvenRootOdd(nums));
/*Find twins
DESCRIPTION:
Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins. 
Your task is to identify them and eliminate!

Given an array of integers, your task is to find two same numbers and return one of them, 
for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.

If there are no twins in the city - return None 
or the equivalent in the language that you are using.
*/

/*
    Checks if an array has more than two of a given element.

    @param arr - unsorted array of numbers
    
    @return boolean
*/
function elimination(arr){
    return arr.sort((a,b)=>a-b).filter((v,i,arr)=>arr[i]===arr[i+1])*1||null
}

/* How the code works: 
The sort() method is used to sort the array arr in ascending order. 
The comparison function (a, b) => a - b ensures that the elements are sorted numerically.
The filter() is used to create a new array that only contains elements 
that satisfy the condition is (v, i, arr) => arr[i] === arr[i+1], 
i.e. check if the current element is equal to the next element in the array. 
Unique elements are filtered out.
The filtered array is multiplied by 1 to convert it into a number.
If it is empty, we got null as a result.
*/

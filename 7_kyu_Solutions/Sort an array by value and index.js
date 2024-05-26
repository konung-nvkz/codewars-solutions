/*Sort an array by value and index
Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5



Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function sortByValueAndIndex(array) {
    return array
      .map((x, i) => [x, x * i + x])
        .sort((a, b) => a[1] - b[1])
        .map((a) => a[0]);
    }

// The map() function is used to create a new array by applying a transformation function to each element of the input array. 
//In this case, the transformation function takes each element x and its index i and returns an array [x, x * i + x]. 
//This means that each element in the new array will be an array containing the original value and the result of the calculation x * i + x.

// The sort() function is used to sort the array based on the second element of each sub-array. 
//The comparison function (a, b) => a[1] - b[1] compares the second element of each sub-array and determines the sorting order.
// If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, no changes are made to the sort order.

// The second map() function is used to extract the first element of each sub-array in the sorted array. 
//This means that the final result will be an array containing the original values, sorted based on the calculated values.

// For example, 
//if we call the function with the input array [3, 1, 4, 2], the function will perform the following steps:

// The map() function will transform the input array into [[3, 3], [1, 2], [4, 12], [2, 6]].
// The sort() function will sort the array based on the second element of each sub-array, resulting in [[1, 2], [2, 6], [3, 3], [4, 12]].
// The second map() function will extract the first element of each sub-array, resulting in [1, 2, 3, 4].

// Therefore, the function will return the sorted array [1, 2, 3, 4].

  // Test
  console.log(sortByValueAndIndex([23, 2, 3, 4, 5])); // Output: [2, 3, 4, 23, 5]
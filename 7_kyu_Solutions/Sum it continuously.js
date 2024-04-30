/*Sum it continuously
Make a function "add" that will be able to sum elements of list continuously 
and return a new list of sums.

For example:

add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
If you want to learn more see https://en.wikipedia.org/wiki/Prefix_sum
*/

function add(arr) {
    return arr.reduce((acc, curr, index) => {
        if (index === 0) {
        acc.push(curr);
        } else {
            acc.push(curr + acc[index - 1]);
        }
        return acc;
    }, []);
}
    
  console.log(add([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15]

/*The reduce() method is used to iterate over the array arr. 
The accumulator acc is initially an empty array. 
For each element curr in the array, the function checks if it's the first element (index === 0). 
If it is, the element is added to the accumulator as is. 
If it's not the first element, the element is added to the sum of the previous element in the accumulator (curr + acc[index - 1]). 
The resulting array is returned as the prefix sum.*/

function add(arr) {
    return arr.map((curr, index) => {
        if (index === 0) {
            return curr;
        } else {
            return curr + arr[index - 1];
        }
    });
}

const add = arr => arr.map((sum => value => sum += value)(0));
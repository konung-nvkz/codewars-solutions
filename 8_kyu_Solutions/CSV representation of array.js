/*CSV representation of array
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
    [[ 0, 1, 2, 3, 4 ],
        [ 10,11,12,13,14 ],
        [ 20,21,22,23,24 ],
        [ 30,31,32,33,34 ]] 
    
output:
    '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

Note: you shouldn't escape the \n, it should work as a new line.
*/

function toCsvText(arr) {
    return arr.map(row => row.join(',')).join('\n');
}

//The function takes an array arr as input.
//It uses the map method to iterate over each row of the array.
//For each row, it uses the join method to convert the row into a comma-separated string.
//Finally, it uses the join method again to join all the rows with a newline character (\n).

const input = [
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]  
];

const output = toCsvText(input);
console.log(output);
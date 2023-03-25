/*Highest and Lowest
DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

// function highAndLow (string) {
//     let str = string.replace(/[\s]/gi, '')
//     let arr = str.split('').sort();
//     console.log(arr);
//     let high = arr[arr.length - 1];
//     console.log(high);
//     return `${high} ${arr[0]}`;    
// }
function highAndLow(string){
    //var arr = string.match(/-?\d+/g).map(Number).sort((a, b) => a - b);
    var arr = string.match(/-?\d+/g).map(Number).sort([compareFunction]);
    console.log(arr);
    let high = arr[arr.length - 1];
    let low = arr[0];
    return `${high} ${low}`;
}

// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("1 2 -3 4 5"));
// console.log(highAndLow("1 9 3 4 -5"));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//not to forget what is done:

// we first create array out of string numbers 
//.match() method retrieves the result of matching a string against a regular expression.
//-? means that we can meet negative number or not
// \d+ means regExp for digits
// /g means global search
//.map(Number) creates a new array of numbers
//.sort((a, b) => a - b) sorts an array not an alphabetically, but from lowest to heighest
// ${arr[arr.length - 1]} - is the last element of array, the highest
//${arr[0]} - is the first element of sorted array, the lowest



function getNumbersFromString(numberString){
    var regx = numberString.match(/-?\d+/g).map(Number).sort();
    let high = regx[regx.length - 1];
    let low = regx[0];
    return `${high} ${low}`;
}
  
console.log(getNumbersFromString("34 -10 32 -8"));
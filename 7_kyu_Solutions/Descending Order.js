/*Descending Order
DESCRIPTION:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/
function descending(number) {
    var str = number.toString(); // we create a string from the number
    var arr = str.split('').sort((a, b) => b - a); // we create an array out of the string and sort it descending
    //var newArr = arr.sort((a, b) => b - a);
    //var result = newArr.join().replace(/[,]/g,'');
    var result = +arr.join().replace(/[,]/g,''); // we create a string out of an array, replace commas in it and convert it back to number
    return result;
}
//to see the results
console.log(descending(42145));
console.log(descending(145263));
console.log(typeof(descending(123456789)));

// the same in one line
function descendingOrder(number){ 
    return +number.toString().split('').sort((a, b) => b - a).join().replace(/[,]/g,'');
}
console.log(typeof(descendingOrder(123456789)));

console.log(descending(42145));
console.log(descending(145263));
console.log(descending(123456789 ));


/*function highAndLow(string){
    var arr = string.match(/-?\d+/g).map(Number).sort((a, b) => a - b);    
    return `${arr[arr.length - 1]} ${arr[0]}`
}*/

/*Write Number in Expanded Form
DESCRIPTION:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/

function expandedForm(num){
    let str = num.toString(), // we first make a string out of number given
        arr = str.split(''), // then create an array of numbers from it
        newArr = arr.reverse() // reverse it to ease the job, as first digit should have bigger index 
                //(e.g. in 1234 first digit should be multiplied to 1000, number with 3 zeros. So it should have index 3)
                .map((x, i) => x * Math.pow(10, i)) // create a new array based on the initial, 
                //where number will be multiplied to 10 powered their index in array
                .filter(x => x > 0) // then we take away all zeros from the array
                .reverse() // change their order
                .join(' + '); // and concatenate them back into string with + signs
                
    return newArr;
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'


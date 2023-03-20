/* Even or Odd - Which is Greater?
DESCRIPTION:
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
    let arr = str.split(''); // let's make a array out of string
    let odd = 0; // create counter for odd numbers
    let even = 0;// create counter for even numbers
    let result = ""; // create variable for result
    for (i=0; i<arr.length; i++) { // start iterating elements of the array
        if (arr[i] % 2 == 0) { //if the number is even
            even+=+arr[i]; // add it up even sum        
        } else { //if the number is odd
            odd+=+arr[i];  // add it up to odd sum
        }
    }
    if (odd===even) {// compare sums of odd and even
        result = "Even and Odd are the same"; // set result for case when they are equal
    } else if (odd > even) {result = "Odd is greater than Even";   //set result for case when odd is greater
    } else {
        result = "Even is greater than Odd"; // set result for the cae when even is greater
    }
    return result;
}

console.log(evenOrOdd('123'));

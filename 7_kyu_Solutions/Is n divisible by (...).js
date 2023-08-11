/*Is n divisible by (...)?
DESCRIPTION:
Create a function that checks if the first argument n is divisible by all other arguments
 (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
This kata is following kata: http://www.codewars.com/kata/is-n-divisible-by-x-and-y
*/

function isDivisible(firstNumber, ...otherNumbers){
    return otherNumbers.every(n => firstNumber % n === 0);
}

// Note:
// as we don't know how many numbers are supposed to be used as possible divisors
// we present the input as the first element (number to be checked for divisors)
// and an array of other elements (rest operator)

// It allows .every method to be used:
//The every() method of Array instances tests whether all elements in the array 
//pass the test implemented by the provided function
//It returns a Boolean value.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every


// one more solution with 'for' cycle:
//we take the first element of an array and check if it is divisible by th others
// negative answer returns false
// in case there are no negative answers, we get true
// we also get true when there are no other arguments

/*
function isDivisible() {
    var target = arguments[0];
    
    for(var i = 1; i < arguments.length; i++) {
        if(target % arguments[i] != 0) {
        return false;
        }
    }
    
    return true;
}*/
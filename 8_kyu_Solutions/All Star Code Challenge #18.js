/*All Star Code Challenge #18
DESCRIPTION:
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1*/

function strCount(str, letter){  
    //we set count for the letters we search
    count = 0;
    //set the limit for search - from first symbol to the last
    for (let i = 0 ; i<= str.length; i++) {
        //compare the symbol with the letter
        if (str[i] == letter)
        // if it is the same, ad up to count
        count++;
    }
    return count;
    }
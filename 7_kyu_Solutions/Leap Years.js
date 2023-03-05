/*Leap Years

DESCRIPTION:
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.*/

function isLeapYear(year) {  
    //three conditions to find out the leap year
    if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
        //message to console
        console.log(year + ' is a leap year');
        //result of the function
        return true;
    } else {
        //message to console
        console.log(year + ' is not a leap year');
        //result of the function
        return false;
    }
} // too lazy to comment on this. Easy solution. Easy come easy go
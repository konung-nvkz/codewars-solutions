/*Day of the Year
DESCRIPTION:
Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1
The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.

*/
function toDayOfYear(dateArray) {
    let day = dateArray[0],
        month = dateArray[1],
        year = dateArray[2],
    
        daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        dayOfYear = 0;

    // Check if year is leap
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysInMonth[1] = 29; // February has 29 days in a leap year
    }       
    
    // Sum up the days in the previous months
    for (var i = 0; i < month - 1; i++) {
        dayOfYear += daysInMonth[i];
    }
    
    // Add the day in the current month
    dayOfYear += day;
    
    return dayOfYear;
}

//shortened version with ternary, slice and reduce

function toDayOfYear1(arr) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    days[1] = ((arr[2] % 4 === 0 && arr[2] % 100 !== 0) || arr[2] % 400 === 0) ? 29 : 28;
    return days.slice(0, arr[1] - 1).reduce((a, b) => a + b, 0) + arr[0];
}
/*What century is it?
Return the century of the input year. 
The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/
function whatCentury(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
        if(i % 100 == 0) {
        century++;
        }
    }

    const endings = {
        11: "th",
        12: "th",
        13: "th",
        1: "st",
        2: "nd",
        3: "rd",
    };

    const lastTwoDigits = century % 100;
    const lastDigit = century % 10;

    let ending;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        ending = "th";
    } else {
        ending = endings[lastDigit] || "th";
    }

    return century + ending;
}


console.log(whatCentury("1999"));// "20th"
console.log(whatCentury("2002"));// "21st"
console.log(whatCentury("1234"));// "13th"




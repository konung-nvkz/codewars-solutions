/*Get Zodiac Sign
Your task is to get Zodiac Sign using input day and month.

For example:

getZodiacSign(1,5) => 'Taurus'
getZodiacSign(10,10) => 'Libra'
Correct answers are (preloaded):

const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
P.S. Each argument is correct integer number.

WESTERN ASTROLOGY STAR SIGN DATES

Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20 to February 18)
Pisces (February 19 to March 20)
*/

function getZodiacSign(day, month) {
    const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];

    return (month === 1 && day >= 20) || (month === 2 && day <= 18) ? signs[1] :
        (month === 2 && day >= 19) || (month === 3 && day <= 20) ? signs[2] :
        (month === 3 && day >= 21) || (month === 4 && day <= 19) ? signs[3] :
        (month === 4 && day >= 20) || (month === 5 && day <= 20) ? signs[4] :
        (month === 5 && day >= 21) || (month === 6 && day <= 20) ? signs[5] :
        (month === 6 && day >= 21) || (month === 7 && day <= 22) ? signs[6] :
        (month === 7 && day >= 23) || (month === 8 && day <= 22) ? signs[7] :
        (month === 8 && day >= 23) || (month === 9 && day <= 22) ? signs[8] :
        (month === 9 && day >= 23) || (month === 10 && day <= 22) ? signs[9] :
        (month === 10 && day >= 23) || (month === 11 && day <= 21) ? signs[10] :
        (month === 11 && day >= 22) || (month === 12 && day <= 21) ? signs[11] :
        signs[0]; // Capricorn
    }

//Some test cases:

console.log(getZodiacSign(1,5)); //=> 'Taurus'
console.log(getZodiacSign(10,10));// => 'Libra'
console.log(getZodiacSign(6, 9)); //=> 'Virgo'
console.log(getZodiacSign(25, 11)); //=> 'Sagittarius'

/* *Very elegant solution:* */

const getZodiacSign = (day, month) => {
    return signs[day>=[20,20,19,20,21,21,23,23,23,23,22,22][month-1]?month:month-1]||"Capricorn"
}

/* The expression day >= [20, 20, 19, 20, 21, 21, 23, 23, 23, 23, 22, 22][month - 1] ? month : month - 1 
checks if the day is greater than or equal to the corresponding threshold day for the given month. 
If true, it returns the month as the index, otherwise it returns month - 1 as the index.
*/



// One more solution that doesn't need an array of months but they are included in each case:

const getZodiacSign = (day, month) => {
    if (month == 1) return day < 20 ? 'Capricorn' : 'Aquarius'
    if (month == 2) return day < 19 ? 'Aquarius' : 'Pisces'
    if (month == 3) return day < 21 ? 'Pisces' : 'Aries'
    if (month == 4) return day < 20 ? 'Aries' : 'Taurus'
    if (month == 5) return day < 21 ? 'Taurus' : 'Gemini'
    if (month == 6) return day < 22 ? 'Gemini' : 'Cancer'
    if (month == 7) return day < 23 ? 'Cancer' : 'Leo'
    if (month == 8) return day < 23 ? 'Leo' : 'Virgo'
    if (month == 9) return day < 23 ? 'Virgo' : 'Libra'
    if (month == 10) return day < 23 ? 'Libra' : 'Scorpio'
    if (month == 11) return day < 22 ? 'Scorpio' : 'Sagittarius'
    if (month == 12) return day < 22 ? 'Sagittarius' : 'Capricorn'
}
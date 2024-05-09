/*Lottery machine
Your task is to write an update for a lottery machine. 
Its current version produces a sequence of random letters and integers (passed as a string to the function). 
Your code must filter out all letters and return unique integers as a string, in their order of first appearance. 
If there are no integers in the string return "One more run!"

Examples
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"
*/

function lottery(str) {
    let uniqueIntegers = '';

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
        if (!uniqueIntegers.includes(str[i])) {
            uniqueIntegers += str[i];
        }
        }
    }

    if (uniqueIntegers === '') {
        return "One more run!";
    } else {
        return uniqueIntegers;
    }
}
//Simple tests:

console.log(lottery("hPrBKWDH8yc6Lt5NQZWQ")); // Output: "865"
console.log(lottery("ynMAisVpHEqpqHBqTrwH")); // Output: "One more run!"
console.log(lottery("555")); // Output: "5"

function lottery(str) {
    const uniqueIntegers = [...str].reduce((acc, char) => {
        if (!isNaN(parseInt(char))) {
            return acc.includes(char) ? acc : [...acc, char];
        }
        return acc;
        }, []).join('');

        return uniqueIntegers ? uniqueIntegers : "One more run!";
    }

//     The reduce function is used to iterate over each character of the str string.
// The GoF regex isNaN is used to check if the character is a number.
// The ternary operator is used to determine whether to include the character in the acc accumulator array.
// Finally, the join function is used to convert the accumulator array to a string.

function lottery(str){
    res = str.replace(/[a-zA-Z]/g,'')
        .split('')
        .filter((x,n,s) => s.indexOf(x) == n)
        .join('');
        return res ? res : 'One more run!'
    }

function lottery(str){
    return [...new Set(str.replace( /\D/g, '' ))].join('') || "One more run!"
    }
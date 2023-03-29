/*Exes and Ohs
DESCRIPTION:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
/*
function XO1(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
*/
//below is long solution with if-elses and two counters
/*function xo(str) {
    let arr = str.toLowerCase().split('');
    const xCount = arr.reduce((acc, curr) => {
    //const xCount = str.toLowerCase().split('').reduce((acc, curr) => {
      if (curr === 'x') {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    console.log()
    const oCount = arr.reduce((acc, curr) => {
    //const oCount = str.toLowerCase().split('').reduce((acc, curr) => {
      if (curr === 'o') {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    console.log(oCount);
    console.log(xCount);
    return xCount === oCount;
  }*/

function XO(str) {
    const counts = str.toLowerCase().split('').reduce((acc, curr) => {
        //we first make the string lower cased
        //turn it into an array .split('')
        //and with .reduce method and arrow function count the number of the letter in array
        acc[curr] = (acc[curr] || 0) + 1;
        return acc; // here this number is returned
    }, {});

    return counts['x'] === counts['o']; // as a result of XO function we strictly compare 
    //if the number of Exes is strictly equal to number of Ohs
}
  console.log(XO("ooxxm")); // true
  console.log(xo("zpzpzpp")); // true
  console.log(xo("ooxx")); // true
  console.log(xo("xooxx")); // false
  console.log(xo("ooxxm")); // true
  console.log(xo("zpzpzpp")); // true
  console.log(xo("zzoo")); // false

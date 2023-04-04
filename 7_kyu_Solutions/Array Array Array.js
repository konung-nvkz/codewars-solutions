/*Array Array Array
DESCRIPTION:
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

FUNDAMENTALSSTRINGSARRAYS
*/

function explode(x) {
    // declare a var called score and set it equal to 0
    let score = 0;
    // if the first element of x is an integer and the second element of x is an integer
    if (typeof x[0] === 'number' && typeof x[1] === 'number') {
      // set score equal to the sum of the first and second elements of x
        score = x[0] + x[1];
    // else if the 1st element of x is an integer
    } else if (typeof x[0] === 'number') {
      // set score equal to the first element of x
        score = x[0];
    // else if the second element of x is an integer
    } else if (typeof x[1] === 'number') {
      // set score equal to the second element of x
        score = x[1];
    // otherwise
    } else {
      // return 'void!'
        return 'Void!';
    }
    // return a list of x for the length of score
    return subArray(x, score);
}
// to do this we need one more function (may be there is another solution?)
// we get x from input, score is declared and taken from explode(x)
function subArray(x, score) {
    // create an empty array of arrays
    let result = [];
    //start count till it is equal to score
    for (let i = 0; i < score; i++) {
      // use .push method to add up x as an element
        result.push(x);
    }
    return result;
}
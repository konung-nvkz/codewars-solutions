//Convert number to reversed array of digits
/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]*/

function digitize(n) {
    return n.toString().split('').map(Number).reverse();
    // we first use .toString to convert the number to string
    // then we .split it to array
    // turn each value of array to number - .map(Number)
    // finally we reverse the order as staated in instructions .reverse()
}

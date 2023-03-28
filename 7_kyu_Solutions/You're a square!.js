/*You're a square!
DESCRIPTION:
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
0  =>  true
3  =>  false
4  =>  true
25  =>  true
26  =>  false
*/

//my variant
function squareNum(num) {
return Math.sqrt(num)==Math.sqrt(num).toFixed(0);
}
// check if square root of number has any symbols after the dot.
//if it has, number is not a square, function will return false
// negative numbers will get false
// zero will get true

console.log(squareNum(-2));
console.log(squareNum(4));
console.log(squareNum(3));
console.log(squareNum(0));

//updated variant hat passes tests at codewars 
var isSquare = function(num){
    return Math.sqrt(num)==Math.sqrt(num).toFixed(0); 
}
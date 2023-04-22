/*Basic JS - Building a calculator
DESCRIPTION:
Let's build a calculator.

This is very basic Javascript kata.

The test expects you to provide a Calculator object with the following methods:

Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()
Each method expects two arguments, so for instance:

Calculator.add(1,4) should return 5.

Only integers are expected to be passed in as arguments, 
and the divide method should return 'false' when trying the divide by zero.
*/

var Calculator = {
    add: function(x, y) {return x+y;},
    subtract: function(x, y) {return x-y;},
    multiply: function(x, y) {return x*y;},
    divide: function(x, y) {
        if (y==0 || y == NaN) {
            return false;
        } else 
        return x/y;}
    };

console.log(Calculator.add(4, 5));//9
console.log(Calculator.substract(40, 5));//35
console.log(Calculator.multiply(4, 5));//20
console.log(Calculator.divide(4, 5));//0.8
console.log(Calculator.add(4, 0));//false

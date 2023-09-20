/*Operator overload ?
DESCRIPTION:
We have a class named 'Foo' with a 'val' attribute.

var foo = new Foo(2);     // foo.val = 2;
var boo = new Foo(3);    // boo.val = 3;
We want to be able to sum two Foo object using the '+' operator.

foo + boo // => must return 5
*/

var Foo = function(value) {
    this.val = value;
}
// JavaScript calls the valueOf method 
// to convert an object to a primitive value
Foo.prototype.valueOf = function() {
    return this.val;
}


//easier solution is to return a new variable as a number with Number proto
function Foo(num) {
    return new Number(num);
}

//the easiest variant that uses the same prototype mechanism:
var Foo = Number;
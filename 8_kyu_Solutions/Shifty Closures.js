/*Shifty Closures
DESCRIPTION:
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?*/

var name = 'Abe';
var greet_abe = function() {
    return `Hello, ${name}!`;// use backticks instead of all the older style
};
var name1 = 'Ben'; // variable can only be declared once
var greet_ben = function() {
    return `Hello, ${name1}!`;// use backticks instead of all the older style
};

// one more obvious solution
/*var name; // declare a global variable name
function greet_abe() {
    name = 'Abe'; //declare the local variable name - unseen globally
    return "Hello, " + name + '!';
};


function greet_ben() {
    name = 'Ben';  //declare the local variable name - unseen globally
    return "Hello, " + name + '!';
};*/
/* Greet Me
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"*/
var greet = function(name) {
    return (`Hello ${(name.slice(0,1).toUpperCase()) + (name.slice(1).toLowerCase())}!`)
};
//we use.slice method twice
// first we say it to take the first symbol (we limit the string by 0, 1)
// then we capitalize this symbol .toUpperCase()
// second time we use .slice, we say it to return the rest of the line
// and we make all the string to the end .toLowerCase()
// then we concat everything and return.
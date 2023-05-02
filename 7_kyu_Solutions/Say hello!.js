/*Say hello!
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/
function greet(name) {
    if(name!=null&&name.length!=0) return `hello ${name}!`
    else return null;
}

//Check for conditions from the task and return the string asked.

// below the same but ternary:
function greet(name) {
    return (name!=null&&name.length!=0) ? `hello ${name}!` : null;
}

const greet = (name) => {return (name!=null&&name.length!=0) ? `hello ${name}!` : null};
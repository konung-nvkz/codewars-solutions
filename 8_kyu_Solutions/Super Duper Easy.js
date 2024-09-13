/*Super Duper Easy
DESCRIPTION:
Make a function that returns the value multiplied by 50 and increased by 6.
If the value entered is a string it should return "Error".
*/
function problem(val) {
    if (typeof(val)=='string') return "Error"; // check the type of the input
    return val*50+6; // for numbers return what was asked
}

console.log(problem(5)); // 256
console.log(problem("hello")); // "error"


//And here's the Python code. I put it inside comments during review. Need to be put to the other file to compile.
/*
def problem(value):
    if isinstance(value, str):
        return "Error"
    return value * 50 + 6;

print(problem(5)) # 256
print(problem("hello")) # "error*/
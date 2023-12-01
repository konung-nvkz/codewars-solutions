/*Age Range Compatibility Equation
DESCRIPTION:
Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.
age range compatibility equation
min = age/2 + 7
max = (age-7)*2

minimum age <= your age <= maximum age

Task
Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

##Examples:

age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20
*/

function datingRange(age) { 
        let min, max;
        if (age <= 14) {
            min = age - 0.10 * age;
            max = age + 0.10 * age;
        } else {
            min = age/2 + 7;
            max = (age-7)*2;
        }
        return `${Math.floor(min)}-${Math.floor(max)}`;
        // old syntax will alow to use another variant of final line
        //return Math.floor(min) + "-" + Math.floor(max);
}

console.log(datingRange(27)); //20-40
console.log(datingRange(5)); //4-5
console.log(datingRange(17)); //15-20

// One more variant with ternary and another variant to write the code.
// It is enough for solution and is yet readable enough.

function datingRange(age){
    let min = age > 14 ? age/2 + 7 : age - (0.10 * age);
    let max = age > 14 ? (age-7)*2 : age + (0.10 * age);
    return [Math.floor(min), Math.floor(max)].join('-')
}

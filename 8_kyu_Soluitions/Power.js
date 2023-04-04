/*Power
DESCRIPTION:
The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000*/

// added up a recursive variant
function numberToPower(number, power){
    console.info(Math.log2(1024));
    if (power === 0) return 1; // any numbere in 0 power is 1. It is a finite pont of the recursion
    return number * numberToPower(number, power - 1) // start the function recursively. 
}
// usual variant (uncommment to test)
/*
function numberToPower(number, power){
let result = 1; //declare result - it is a final step, number^0
for (let i = 1; i <= power;i++)  { // start iterating from 1 to power
    result*=number //get the power by multiplying the number and the result
}
return result // get the result after all iterations
}; */
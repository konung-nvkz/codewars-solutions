/*
Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net
*/

function solution(number){
    let arr=[]; // we first take an empty array to write all numbers (both divided by 3 and 5)
        for (let i=number-1;i>=0;i--){// start counting from number down to zero
            //if number is eual to 0 or negative, counter will stop immediately
        if (i%3===0) arr.push(i); // if the number is divided by 3, it will appear in array
        if (i%5===0) arr.push(i); // if the number is divided by 5, it will appear in array
} // note, at this moment array will have repeating values
//to delete them we create Set on Arr basis
    return [...new Set(arr)].reduce((a,b)=>a+b,0) // when the set is created, we sum the multiples with reduce method
    //in other words .reduce iterates the Set from beginning to an end with a callback function
    // resulting in sum of all numbers
}

//easier solution
function solution1(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){ //here we start counting from 1 to number we get
        if(i % 3 == 0 || i % 5 == 0){ // and check that number is divided by 3 OR by 5. 
        // it makes the code work one as || (or operator) stops at truth
        sum += i; //if everything is OK we sum up the new I to result
        }
    }
    return sum;
}
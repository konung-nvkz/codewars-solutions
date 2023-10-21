/*Count the divisors of a number
DESCRIPTION:
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses 
are shown only for you to see which numbers are counted in each case.
*/

//Here is one solution that works. 
//It gets the array with all divisors (can be implemented in other functions).
//But it takes much time for big numbers, so it is not optimal.

function getDivisorsCnt(num){
    // Check for the case if number is equal to 1.
    // In this case it is the only divisor
    if (num == 1) return 1;

    //Otherwise add 1 to array of divisors
    // as any number can be didided by 1
    let arr = [1];
    for (i=2; i<=num; i++) {
        if (num%i==0)
        arr.push(i);
    }
    
    return arr.length;
}

// Test cases:
console.log(getDivisorsCnt(498765))// 16
console.log(getDivisorsCnt(10))// 4
console.log(getDivisorsCnt(11))// 2
console.log(getDivisorsCnt(54))// 8

//Here is one more solution that passes time tests
function getDivisorsCnt(n) {
    //again we first check if we n=1
    if (n == 1) return 1;

    //initialize the counter and parameter
    let count = 0;
    let param = Math.sqrt(n);

    // And find out the biggest divisor
    for (let i = 1; i <= param; i++) {
      if (n % i === 0 && i != param) {
        count += 2;
      }
      //If square root of number is its biggest divisor we can count it as one
      else if (n % i === 0 && i == param) {
          count += 1;
        }   
    }   
    return count;
  }

// And simplified, but less universal solution
// Just take all numbers and if they are divisors, add up to counter
function getDivisorsCnt(n){
    let count=0;
    for(let i=1;i<=n;i++){
    if(n%i===0){
      count++;
    }
    }
    return count;
}
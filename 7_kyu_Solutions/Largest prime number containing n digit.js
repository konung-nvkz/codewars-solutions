/*Largest prime number containing n digit
DESCRIPTION:
Just as the title suggestes :D . For example ->

largest(1); //Should return 7
largest(2); //Should return 97
....
Do not mind the pattern as it is just an incident ! And make sure to return false if the input is not an integer :D 
This might seem simple at first, it is, but keep an eye on the performance. Go for it !*/

const isPrime = num => {
    for(let i = 2 ; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function largest(num) {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) return false;
    let digit = Math.pow(10, num)
    while(!isPrime(digit))
    digit--
    return digit;
}
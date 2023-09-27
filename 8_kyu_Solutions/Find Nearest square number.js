/*Find Nearest square number

DESCRIPTION:
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)*/

// Function declaration 

function nearestSq(n) {
    // an input needs to be positive integer. Let's check it, though it is not necessary

	if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) return 'Check number'; 
    let nearestHigh = n_High(n);
	let nearestLow = n_Low(n);
    //check which number is closer to our number
	return (n-nearestLow) < (nearestHigh - n) ? nearestLow : nearestHigh;
}
function n_High(n) {
	if (Math.sqrt(n)%1 === 0) {
		return n
	}
	return n_High(++n);
}
function n_Low(n) {
	if (Math.sqrt(n)%1 === 0) {
		return n
	}
	return n_Low(--n);
}

// function expression wwith built-in methods
// The Math.pow() static method returns the value of a base raised to a power
// The Math.round() static method returns the value of a number rounded to the nearest integer.
// The Math.sqrt() static method returns the square root of a number
const nearest_sq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
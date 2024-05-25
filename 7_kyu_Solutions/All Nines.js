/*All Nines
Task
Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's. Return -1 if no such m exists.

Examples:
allNines(11) -> 9, because 11*9 = 99.

allNines(12) -> -1, because 12 is even, so no multiple of it can be all 9's.

allNines(13) -> 76923, because 13*76923 = 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only 9's.

NOTE: Although x ≤ 4000, m can be very very LARGE. (x is limited to 4000 because at x = 4327, the value of m exceeds Python's limit (4300 digits) for integer -> string conversion.)
*/

const allNines = x => {
    if (!(x % 5n) || !(x % 2n)) return -1n;
    
    for (let nines = 9n; ; nines = nines * 10n + 9n)
        if (!(nines % x)) return nines / x;
}
/*By first if we check whether the number is divisible by 5 or 2, cause these cases cannot provide the asked result and the function returns -1n, which represents a BigInt value.
This for loop initializes a variable nines with the value 9n, which represents a BigInt value. The loop condition is omitted, indicating an infinite loop. In each iteration of the loop, the value of nines is multiplied by 10n and then added with 9n. This effectively generates a sequence of numbers that consist of only the digit 9 (e.g., 9, 99, 999, 9999, and so on).
Inside the loop, there is an if statement that checks if nines is divisible by x. If it is, the function returns the division result nines / x, which will be a BigInt value.
*/
//Simple tests:

console.log(allNines(11)); // Output: 9
console.log(allNines(12)); // Output: -1
console.log(allNines(13)); // Output: 76923

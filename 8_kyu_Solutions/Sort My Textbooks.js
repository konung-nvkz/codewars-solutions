/*Sort My Textbooks
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! 
Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/


function sorter(arr) {
    return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}
//Function compares the lowercase versions of a and b using the greater than (>) operator. 
//If a is greater than b, it returns 1, indicating that a should be sorted after b. 
//If a is less than or equal to b, it returns -1, indicating that a should be sorted before or at the same position as b.

//Test cases
console.log(sorter(["Apple", "banana", "cherry", "Date"])); // Output: ["Apple", "banana", "cherry", "Date"]
console.log(sorter(['Algebra', 'History', 'Geometry', 'English'])); // ['Algebra', 'English', 'Geometry', 'History']
console.log(sorter(['Algebra', 'history', 'Geometry', 'english'])); //['Algebra', 'english', 'Geometry', 'history']
console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english'])); //['$istory', '**english', 'Alg#bra', 'Geom^try']

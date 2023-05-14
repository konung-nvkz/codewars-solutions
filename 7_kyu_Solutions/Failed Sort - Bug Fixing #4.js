/*Failed Sort - Bug Fixing #4
Failed Sort - Bug Fixing #4
Oh no, Timmy's Sort doesn't seem to be working? 
Your task is to fix the sortArray function to sort all numbers in ascending order
*/

var sortArray = function(value) {
    return value.split('').sort((c, p) => c - p ).join('');
}

//easy sort algorithm. 
// all we needed is to change "/" for "-"
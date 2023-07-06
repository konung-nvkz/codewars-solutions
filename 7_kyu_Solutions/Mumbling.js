/*Mumbling
DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
	return s.split('').map((symbol, index) => (symbol.toUpperCase() + symbol.toLowerCase().repeat(index))).join('-');
}

//input here is string
//we first create an array out of it: s.split('')
//then we change the array .map()
// by an arrow function that takes symbol and its index
// we concatenate each symbol once taken in an upper case symbol.toUpperCase()
// and taken a lower case an 'index' times + symbol.toLowerCase().repeat(index)
// if you remember that index starts from zero, you'll get why we will obtain the first symbol taken only once and uppercased
// finally we get the string again, and array elements will be divided by '-' - .join('-')
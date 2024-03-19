/*Up and down, the string grows

Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript, uppercase/lowercase in Kotlin. Typically, these methods won't change the size of the string.

For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.

However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

For example, in Ruby, That means str.upcase.downcase.size > str.size

You should just set the value of STRANGE_STRING to meet the previous criteria.

Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.
*/

//A brief explanation on what has to be done:
// All neessary is to find a symbol or symbols that either have no uppercase/lowercase analog, and show it.
//Solution must not exceed 31 symbol, but 23 are already taken by "const STRANGE_STRING = "."
// we can shorten by 2 symbols here by changing keyword "const" by "let", and still it should be short.
//So the best idea would be to use umlauts, greek letters and other special symbols or combinations of them.
//Among those we can take:
//ẘ
//ᾩ
//ẖ

const STRANGE_STRING = "ß̀"

// to prove that 23 symbols are taken:
console.log("const STRANGE_STRING = ".length) // 23
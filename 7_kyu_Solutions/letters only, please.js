/*letters only, please!
Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

Write a function that takes a string and returns a string without the unnecessary characters.

Examples
removeChars('.tee1')    ==> 'tree'

removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'

removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)

removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  ==> '' (empty string)
*/

function removeChars(str) {
    return str.replace(/[^a-zA-Z\s]/g, "");  
}

//small note for me: \s is used not to replace spaces

console.log(removeChars('.tee1'));//    ==> 'tree'

console.log(removeChars("that's a pie$ce o_f p#ie!"));// ==> 'thats a piece of pie'

console.log(removeChars('john.dope@dopington.com'));//    ==> 'johndopedopingtoncom'

console.log(removeChars('my_list = ["a","b","c"]'));//    ==> 'mylist  abc'

console.log(removeChars('1 + 1 = 2'));//    ==> '    ' (string with 4 spaces)
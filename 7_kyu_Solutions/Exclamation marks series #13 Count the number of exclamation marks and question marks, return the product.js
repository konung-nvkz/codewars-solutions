/*Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
Description:
Count the number of exclamation marks and question marks, return the product.

Examples
""          --->   0
"!"         --->   0
"!ab? ?"    --->   2
"!!"        --->   0
"!??"       --->   2
"!???"      --->   3
"!!!??"     --->   6
"!!!???"    --->   9
"!???!!"    --->   9
"!????!!!?" --->  20
*/

function product(s){
    if ((s ==="") || (s.length===1)) return 0;
    const exclamation = (s.match(/!/g) || []).length;
    const question = (s.match(/\?/g) || []).length;
    return (exclamation*question);
}

//Basic tests:

console.log(product("!"));//    0
console.log(product("!ab? ?"));//    2
console.log(product(""));//    0
console.log(product("!!"));//    0
console.log(product("!??"));//    2
console.log(product("!???"));//    3
console.log(product("!!!??"));//    6
console.log(product("!!!???"));//    9
console.log(product("!???!!"));//    9
console.log(product("!????!!!?"));//   20

//optimized ternary version:
function product(s){
    return (s.match(/!/g) == null || s.match(/\?/g) == null) ? 0 : s.match(/!/g).length * s.match(/\?/g).length;
}

//Another solution:
function product(s){
    excs = s.split('!').length - 1
    ques = s.split('?').length - 1
    return excs * ques
}
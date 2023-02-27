/*Kebabize

DESCRIPTION:
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters*/

function kebabize(str) {
    //using regular expressions
    return str.replace(/([A-Z])/g,'-$1').toLowerCase().replace(/[0-9]/g,'').replace(/^-/,'')
}
// some comments for newbies like me
// str.replace() method replaces symbols
// /g means global search
// toLowerCase() deals with lower case
// capital letters ar replaced with lower case and "-" addition
// numbrs are replaced with "-"
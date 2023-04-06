/*Abbreviate a Two Word Name
DESCRIPTION:
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
patrick feeney => P.F
STRINGSFUNDAMENTALS
*/

let name = "Sam Harris";

//JavaScript:
const getInitials = name => name.split(" ").map(word => word.charAt(0).toUpperCase() + ".").join("").slice(0, -1);
// that is how it works:
// we create an array based on the string we get name.split(" ")
// than start getting a copy of it (.map(...))
// with 1st symbols (.charAt(0)) of strings (word) that are elements of the array
// to get things right, we make these symbols .toUpperCase()
// and add dots to them + "."
// then we join the array back to string (.join(""))
// and return this string without the last element (.slice(0, -1)

//same same but longer
// function getInitials(name) {
//     var names = name.split(" "); //create an array of words
//     var initials = ""; create 
//     for (var i = 0; i < names.length; i++) {
//         initials += names[i].charAt(0).toUpperCase() + ".";
//     }
//     return initials.slice(0, -1);
// }

//with comments in Russian
function getInitials1(name) {
    // разбиваем строку на массив слов по пробелу
    var names = name.split(" ");
    // создаём переменную для сохранения инициалов
    var initials = "";
    // проходимся циклом по каждому слову в массиве
    for (var i = 0; i < names.length; i++) {
      // получаем первую букву слова, переводим её в верхний регистр и добавляем точку
        initials += names[i].charAt(0).toUpperCase() + ".";
    }
    // возвращаем инициалы, удаляя последнюю точку
    return initials.slice(0, -1);
}  

//Python:
// def get_initials(name):
//     names = name.split(" ")
//     initials = ""
//     for i in range(len(names)):
//         initials += names[i][0].upper() + "."
//     return initials[:-1]


//Both functions take a string argument name which contains two words separated by a space. They split this string into an array of words, and then iterate over each word to get the first letter, capitalize it, and add a dot. Finally, they join the two initials together with a dot and return the result. 


console.log(getInitials("sam harris")); // Output: "S.H"


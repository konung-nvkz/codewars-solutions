/*Here I decided to ease the process of adding, committing and pushing the files to github
simple explanation: sometimes file name contains spaces or other symbols thet cannot be added.
Simple regexp changes it to * in order everything works
*/
let filename = "D:\codewars-tasks-solutions\8_kyu_Soluitions\this is a problem.js";
function prepareFileName(filename) {
    let filename1 = filename.replace(/\\/g, "\\");
    let arr = filename1.split('\\');
    return arr;
    //return filename.replace(/\u0020/g, "*")
}

// function prepareCommitComment(filename){
//     return 
// }

console.log(prepareFileName(filename));
//console.log(prepareCommitComment(filename));


let str = "D:\codewars-tasks-solutions\8_kyu_Soluitions\this is a problem.js";
function replaceSpaces(str) {
    return str.replace(/ /g,"\\ ");
  }
console.log(replaceSpaces(str));

//Эдя, напиши, пожалуйста, код на JS, который берёт строку, и заменяет в ней все пробелы на *, но при этом не меняет содержащиеся в строке символы \
// ниже примеры
// строка D:\codewars-tasks-solutions\8_kyu_Soluitions\this is a problem.js
// должна превратиться в "D:\codewars-tasks-solutions\8_kyu_Soluitions\this*is*a*problem.js";

// строка D:\codewars-tasks-solutions\7_kyu_Solutions\Thinkful - String Drills Quotable.js
//должна превратиться в D:\codewars-tasks-solutions\7_kyu_Solutions\Thinkful*-*String*Drills*Quotable.js

// replaceSpaces('D:\codewars-tasks-solutions\8_kyu_Soluitions\this is a problem.js')
//result: "D:\codewars-tasks-solutions\8_kyu_Soluitions\this*is*a*problem.js"

//replaceSpaces(D:\codewars-tasks-solutions\7_kyu_Solutions\Thinkful - String Drills Quotable.js)
//result: "D:\codewars-tasks-solutions\7_kyu_Solutions\Thinkful*-*String*Drills*Quotable.js"
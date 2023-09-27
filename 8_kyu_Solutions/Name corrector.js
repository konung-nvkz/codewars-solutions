/*Here I decided to ease the process of adding, committing and pushing the files to github.
simple explanation: sometimes file name contains spaces or other symbols thet cannot be added.
hint is to wrap up the filename with ''. 
If you are as lazy as I am, you can concat the line with git command and put it to a clipboard
*/
let filename = "D:\codewars-tasks-solutions\8_kyu_Soluitions\this is a problem.js";
function prepareFileName(filename) {   
    return `git add '${filename}'`
}
console.log(prepareFileName(filename));

//install copy file name extension to 

//HINT
// recursively rename all files in folder via PowerShell*/
/*Get-ChildItem -Recurse *.* | Rename-Item -NewName { $_.Name -replace ' ','-' }*/


// function checkPath() {
//   return `${userHome}`;
// }
const path = require('path');
let name ="Name corrector";

function prepareName(name) {
    return `git add ${__dirname},"\",${__filename.replace(/\u0020/g, "*")}.js`
}
console.log(prepareName(name));

// Node.js program to demonstrate the   
// path.resolve() Method  
  
// Import the path module
const path = require('path');
   
console.log("Current directory:", __dirname);

console.log("current file:", __dirname, __filename);
   
// Resolving 2 path-segments
// with the current directory
path1 = path.resolve("users/admin", "readme.md");
console.log(path1)
   
// Resolving 3 path-segments
// with the current directory
path2 = path.resolve("users", "admin", "readme.md");
console.log(path2)
   
// Treating of the first segment
// as root, ignoring the current directory
path3 = path.resolve("/users/admin", "readme.md");
console.log(path3)
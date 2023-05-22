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


/*Get-ChildItem -Recurse *.* | Rename-Item -NewName { $_.Name -replace ' ','-' }
// recursively rename all files in folder via PowerShell*/

function checkPath() {
  return `${userHome}`;
}
console.log(checkPath());
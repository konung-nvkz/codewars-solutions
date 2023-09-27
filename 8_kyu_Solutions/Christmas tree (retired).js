/*Christmas tree (retired)
DESCRIPTION:
Create a function that returns a christmas tree of the correct height.

For example:

height = 5 should return:

    *    
   ***   
  *****  
 ******* 
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.
*/
function christmasTree(lines) {
    let str=[]; // solution with arrays
    for (let i=1;i<=lines;i++){ // start the counter
    str.push(' '.repeat(lines-i)+'*'.repeat((i - 1) * 2 + 1)+' '.repeat(lines-i))
    }
    // we use push and repeat methods, and to start a new line we use \n and join method
    return str.join('\n')
}
/*Simple beads count
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

function countRedBeads(n) {
    if (n < 2) {
        return 0;
    }
   return (n - 1) * 2;
}

//And ternary, my favorite:

function countRedBeads(n) {
    return (n<2) ? 0 : (n-1)*2;
}
//Test (Not sure if it is necessary in such case)

console.log(countRedBeads(1))//0
console.log(countRedBeads(5))//8
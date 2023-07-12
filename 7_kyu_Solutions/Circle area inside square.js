/*Circle area inside square
DESCRIPTION:
Circle area inside square
Turn an area of a square in to an area of a circle that fits perfectly inside the square.

inscribed circle

You get the blue+red area and need to calculate the red area.

Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.

You don't have to worry about error handling or negative number input: area >= 0.

This kata might be simpler than you expect, but good luck!
*/

function squareAreaToCircle(size){
    return Math.PI*(Math.sqrt(size)/2)**2;
    //or 
    //return Math.PI*size/4;
}
// area of the curcle inside of the square
// S = Pi * (a / 2)2
// Where a/2 — radius of a circle, a — length of the square size (square root of its size).


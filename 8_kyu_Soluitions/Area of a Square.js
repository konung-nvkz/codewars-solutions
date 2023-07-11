/*Area of a Square
DESCRIPTION:
Complete the function that calculates the area of the red square, 
when the length of the circular arc A is given as the input. 
Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
//NB 1/4 of circle is pictured
// so we need to find the square of the full circle
// radius will be the side of the square

function squareArea(A){
    var circle = 4 * A,
        radius = circle / (2 * Math.PI);
    return Math.round(radius*radius*100)/100;
}
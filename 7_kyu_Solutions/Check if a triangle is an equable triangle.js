/*Check if a triangle is an equable triangle!
DESCRIPTION:
A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. 
You will be provided with the length of sides of the triangle. Happy Coding!
*/

function equableTriangle(a, b, c) {
    let perimeter = a+b+c;
        half = perimeter/2;
    return (Math.sqrt(half * (half-a)*(half-b)*(half-c))) == perimeter;
}

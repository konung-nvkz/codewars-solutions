/*Triangle type
DESCRIPTION:
In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - 
function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point 
or integer numbers (or both).


Acute
Right
Obtuse

Examples:
triangleType(2, 4, 6); // return 0 (Not triangle)
triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. 
But you can solve this kata even without angle calculation.

There is very small chance of random test to fail due to round-off error, 
in such case resubmit your solution.
*/

/*
Explanation of solution: 

As we don't know which side is the biggest, we should first get it by comparing three sides given.
To do this we use Math.max.

To ease the solution, let us work with the case, where:
- a, b, c are the sides of triangle,
- c is the biggest side (max)
- angle A is an included angle to the side c

We know that if sum of two smaller sides is less or equal to the biggest side, 
it is not a triangle:

a+b <= c; or a+b+c <= 2*max

According to Wikipedia,
Law of cosines can have the following consequences:
cos A = (b^2 + c^2 - a^2) / 2*b*c
To be more exact (Pythagorean theorem, they say),
we need to compare square of max side with sum of squares.

if b^2 + c^2 - a^2 = 0, it means that A is Right;
if b^2 + c^2 - a^2 < 0, it means that A is Obtuse;
if b^2 + c^2 - a^2 > 0, it means that A is Acute; 
*/

function triangleType(a, b, c) {
    let max = Math.max(a,b,c); //find the biggest side of triangle
    
    //check if we have a triangle 
    if (a+b+c <= 2*max) return 0;
    //check if angle A is Right
    if (max*max == (a*a+b*b+c*c)/2) return 2;
    //check if angle A is Obtuse
    if (max*max > (a*a+b*b+c*c)/2) return 3;
    //if nothing else suited, we have Acute angle
    return 1;
}

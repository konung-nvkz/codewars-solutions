/*Geometry Basics: Distance between points in 2D

DESCRIPTION:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Tests compare expected result and actual answer with tolerance of 1e-6.*/

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.abs(a.x - b.x) ** 2 + Math.abs(a.y - b.y) ** 2);
}

// to find the solution, we use pythagoras theorem. 
//(Math.abs(a.x - b.x) ** 2 - is a squared length of one side
// Math.abs(a.y - b.y) ** 2) - is a squared length of another side
// we sum them up and find a square root - a hypotenuse



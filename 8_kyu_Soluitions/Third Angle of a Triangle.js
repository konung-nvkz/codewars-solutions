/*Third Angle of a Triangle

DESCRIPTION:
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle*/

function otherAngle(a, b) {
	if (typeof a,b !== 'number' || a,b <= 0 || !Number.isInteger(a,b) || (a+b)>=180) return 'Check angles';
	return (180 - a - b);
}

// one more but the same
/*
function otherAngle(a, b) {
	if (typeof a,b !== 'number' || a,b <= 0 || !Number.isInteger(a,b)) return 'Check number';
	return (180 - a -b);
}*/

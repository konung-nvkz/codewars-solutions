/*Heron's formula

Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

�
∗
(
�
−
�
)
∗
(
�
−
�
)
∗
(
�
−
�
)
s∗(s−a)∗(s−b)∗(s−c)
​
 
where

�
=
�
+
�
+
�
2
s= 
2
a+b+c
​ 
Output should have 2 digits precision. */

function heron(a, b, c) {
    let s = (a+b+c)/2; // let's first find square
    let area = +Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
    // we will first get area with Math.sqrt
    // then round it to 2 digits by .toFixed(2)
    // and finally make the string a number again by +
    return area;
}
console.log(heron(3, 4, 5));
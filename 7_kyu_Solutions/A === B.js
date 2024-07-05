/*A === B
Compare 2 integers and return if they are equals, don't use the comparison Operators

Can't use these Operators

Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
Example:
    0 == 0  => true 
    0 == 1  => false 
*/

function d01(a,b){
    return !(a - b) && !(b - a);
}

/*In this code, we subtract b from a and a from b. 
If both subtractions result in zero, it means that a and b are equal. 
The logical NOT operator (!) is then used to invert the result, so that true is returned when the integers are equal, and false is returned when they are not.*/
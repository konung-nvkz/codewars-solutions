/*isEven? - Bitwise Series
Is the number even?
If the numbers is even return true. If it's odd, return false.

Oh yeah... the following symbols/commands have been disabled!

use of %
use of .even? in Ruby
use of mod in Python
*/

var isEven = function (n) { //if n is even return true, otherwise, return false
    return Math.trunc(n/2) === (n/2);
}
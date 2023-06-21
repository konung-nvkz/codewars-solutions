/*Multiple of index
DESCRIPTION:
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

function multipleOfIndex(array) {
    return array.filter((number, index) => ((number%index==0) || (number == 0 && index == 0)));
}

//we use array.filter method to ease up the code
// as stated, we take only the elements that can be divided on their index without any rest
// we also check if the first element of array is equal to zero and add zero as a first element
// of filtered array
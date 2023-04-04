/*Array plus array
DESCRIPTION:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/
function arrayPlusArray(array2, array3) {
    let arr3 = 0;
    let arr2 = 0;
    for (i = 0; i < array2.length; i++) {
        arr2 += array2[i];
    }
    for (i = 0; i < array3.length; i++) {
        arr3 += array3[i];
    }
    return arr3 + arr2; //something went wrong
}
/*Hoisting
he sort function is supposed to set the global variable to 1 when it has been executed at least once but it does not.

Can you figure out why?

You should not modify the behavior of the sort function.
function sort(array) {
  // Mark function as called through the global variable
    sorted = 1;
    
    // Transform the input data
    for(var i = 0; i < array.length; i++) {
        array[i] = 3 * array[i] + 2;
    }
    
    // Remove middle value
    var n = array.length, mid = Math.floor(n/2);
    array = array.slice(0, mid).concat(array.slice(mid+1));
    
    // Sort the array
    var sorted = false;
    for(var i = array.length - 1; i >= 0 && ! sorted; i--) {
        sorted = true;
        for(var j = 0; j < i; j++) {
        if ( array[j] > array[j+1] ) {
            swap(array, j, j+1);
            sorted = false;
        }
        }
    }
    
    return array;
}

*/
/*The issue in the code lies in the redeclaration of the sorted variable inside the sort function.
In JavaScript, when you use the var keyword to declare a variable inside a function, it creates a new variable that is local to that function. 
So, when you declare var sorted = false; inside the sort function, it creates a new sorted variable that is separate from the global sorted variable.
To fix this issue and ensure that the global sorted variable is set to 1, you should remove the redeclaration of sorted inside the sort function.
so we sill use local variable isSorted instead of redeclaration*/

var sorted = 0;

function sort(array) {
    // Mark function as called through the global variable
    sorted = 1;
    
    // Transform the input data
    for(var i = 0; i < array.length; i++) {
        array[i] = 3 * array[i] + 2;
    }
    
    // Remove middle value
    var n = array.length, mid = Math.floor(n/2);
    array = array.slice(0, mid).concat(array.slice(mid+1));
    
    // Sort the array
    var isSorted = false;
    for(var i = array.length - 1; i >= 0 && !isSorted; i--) {
        isSorted = true;
        for(var j = 0; j < i; j++) {
        if ( array[j] > array[j+1] ) {
            swap(array, j, j+1);
            isSorted = false;
        }
        }
    }
    
    return array;
}

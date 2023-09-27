/*Remove duplicates from list

DESCRIPTION:
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.*/


function distinct(a) {
    const set = new Set(a); // we create set on the basis of initial array
    // that will remove duplicates and save the order of the rest elements
    const arr = Array.from(set); // then we create an aray based onn a new set
    return arr; // finally we return a new array
}

//NB can be shortened to one line:
/*function distinct(a) {
    return Array.from(new Set(a));
}*/

// one more solution with .filter method:
/*const distinct = a => a.filter((item, index) => a.indexOf(item) === index);*/
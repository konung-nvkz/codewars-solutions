/*Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

function maskify(cc) {
    cc = cc.split('');// make an array out of the string with credit card number
    for(var i = 0; i < cc.length - 4; i++){ // start iterating the array until its 4 last elements
        cc[i] = "#";  // change all elements of the array that we iterate to #
}
    cc = cc.join(''); // change he type of the array back to string
    return cc; // return the result
}


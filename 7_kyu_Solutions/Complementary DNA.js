/* Complementary DNA
If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
function DNAStrand(dna){
    //our first task is to make an object with keys and values
    let otherSide = {A:'T',T:'A',C:'G',G:'C'};
    //then we will use .replace method and regExp
    // to globally modify the values by taking them from the other side of the DNA
    return dna.replace(/./g, value => otherSide[value]);
}
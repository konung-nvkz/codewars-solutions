/*Arithmetic List!
DESCRIPTION:
In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

first the first term in the sequence
c the constant that you are going to ADD ( since it is an arithmetic sequence...)
l the number of terms that should be returned
Useful link: Sequence

Be sure to check out my Arithmetic sequence Kata first ;)
Don't forget about the indexing pitfall ;)
*/

var seqlist = function(first,c,l){
    let arr = [first];
    for (i=1; i<l; i++){
        arr.push(first+c*i)
    }
    return arr;
}
console.log(seqlist(1, 2, 4)); // 1, 3, 5, 7
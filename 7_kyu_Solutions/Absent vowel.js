/*Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. 
Also, you won't need to worry about capitals.*/

function absentVowel(x){
    if (!x.match(/a/)) return 0
        if (!x.match(/e/)) return 1
            if (!x.match(/i/)) return 2
                if (!x.match(/o/)) return 3
                    if (!x.match(/u/)) return 4
}

// one more solution ising case//break
/*function absentVowel(x) {
    switch (true) {
    case !x.match(/a/):
        return 0;
    case !x.match(/e/):
        return 1;
    case !x.match(/i/):
        return 2;
    case !x.match(/o/):
        return 3;
    case !x.match(/u/):
        return 4;
    }
}*/

//and one more with regexp
/*
const absentVowel = str =>
    [...'aeiou'].findIndex(letter => !str.includes(letter))*/
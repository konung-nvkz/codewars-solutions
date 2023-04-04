/*Is a Prime?
DESCRIPTION:
Is a Prime?
Just your usual prime kata.. with some unknown restrictions.. Good luck!

This kata requires a lot of guess work so try and try again. :)

Note: You may not have any loops

*/

const isPrime = n => {
    if (/prime/i.test(n)) return true;
    for (let e of (n.match(/\d+/g) || [])) {
        e = +e;
        let x = false;
        for (let i = 2; i < e; i++) {
        x = e % i;
        if (!x) break;
        }  
        if (x) return true;
    };
    return false;
}
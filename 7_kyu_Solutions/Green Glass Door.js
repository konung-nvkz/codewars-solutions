/*Green Glass Door
Step through my green glass door.

You can take the moon, but not the sun.

You can take your slippers, but not your sandals.

You can go through yelling, but not shouting.

You can't run through fast, but you can run with speed.

You can take a sheet, but not your blanket.

You can wear your glasses, but not your contacts.

Have you figured it out? Good! Then write a program that can figure it out as well.
*/
// In fact we need to write a program that checks the string for double symbols.

function stepThroughWith(word) {
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
        return true;
        }
    }
    return false;
}

//One more solution with ternary:

function stepThroughWith(word) {
    return word.split('').some((letter, index) => letter === word[index + 1]) ? true : false;
}

function stepThroughWith(s) {
    return (/(.)\1/).test(s);
}
/*Check the exam
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. 
The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. 
Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer,
represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

function checkExam(key, submitted) {
    let result = 0;
    for (let i=0; i<key.length; i++){
        if (key[i]==submitted[i]) {
            result+=4;
        }
        else if (submitted[i]=="") {
            continue;
        }
        else  {
            result-=1;
        }
    }
    return result>=0 ? result : 0;
}

// Simple tests

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));// → 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));// → 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));// → 16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));// → 0

//Case/break variant: 

// function checkExam(key, submitted) {
//     let result = 0;

//     for (let i = 0; i < key.length; i++) {
//         switch (true) {
//         case key[i] === submitted[i]:
//             result += 4;
//             break;
//         case submitted[i] === "":
//             continue;
//         default:
//             result -= 1;
//             break;
//         }
//     }

//     return result >= 0 ? result : 0;
// }

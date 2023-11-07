/*All Inclusive?
DESCRIPTION:
Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
    "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
    "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true
Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
*/

function containAllRots(strng, arr) {
    if (strng=="" || arr==[]) return true;
    for (let i = 0; i < strng.length; i++) {
        if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) == -1) {
        return false
        //This line checks if the current rotation, obtained by slicing the string strng from index i to the end 
        //and concatenating it with the sliced string from the beginning to index i, is present in the arr array. 
        //If the rotation is not found (indexOf returns -1), 
        //it means that at least one rotation is missing, and the function returns false.
        }
    }
    return true
}

        console.log(containAllRots("", []))//, true)
        console.log(containAllRots("", ["bsjq", "qbsj"]))//, true)
        console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))//, true)
        console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]))//, false)


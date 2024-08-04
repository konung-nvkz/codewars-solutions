/*My Language Skills
Description:
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
My other katas
If you enjoyed this kata then please try my other katas! :-)

Translations are welcome!
*/

function myLanguages(results) {
    // Filter languages with scores >= 60 and sort them in descending order
    return Object.entries(results)
        .filter(([language, score]) => score >= 60) // Keep only languages with score >= 60
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA) // Sort by score in descending order
        .map(([language]) => language); // Extract the language names
}

/*Explanation of Changes
Use of Object.entries(): This method converts the results object into an array of key-value pairs, making it easier to filter and sort.
Filtering: The filter function checks if the score is greater than or equal to 60.
Sorting: The sort function sorts the entries based on their scores in descending order.
Mapping: Finally, the map function extracts just the language names from the sorted entries.
*/

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))// ["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))// ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}))// [])
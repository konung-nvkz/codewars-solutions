/*
Simple directions reversal
In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
More examples in test cases.

Good luck!

Please also try Simple remove duplicates
*/
function solve(arr){
    return arr.reverse().map((item, index, arr) => {
        if(index === 0) return item.replace(/Left|Right/, 'Begin')
        else if(arr[index-1].includes('Left')) return item.replace(/Left|Right|Begin/, 'Right')
        else return item.replace(/Left|Right|Begin/, 'Left')
    })
}

/*
Some short comment.
We iterate a reversed array of directions by map.
We always change the 1st direction to "Begin", noo matter how it used to look.
While the rest are changed to the opposite.
 */

//Brief tests

console.log(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr'])); // ['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd']
console.log(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]));// ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
console.log(solve(['Begin on Road A']));//['Begin on Road A']))
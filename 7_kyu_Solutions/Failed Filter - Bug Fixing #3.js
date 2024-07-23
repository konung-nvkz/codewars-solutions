/*Failed Filter - Bug Fixing #3
Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.
*/

// var FilterNumbers = function(str) {
//   return str.split('').filter(c => !ParseInt(c)).join('');
// }
var FilterNumbers = function(str) {
    return str.split('').filter(c => isNaN(parseInt(c))).join('');
}

var FilterNumbers = str => str.split('').filter(c => isNaN(c)).join('');

//Other regexp solutions:
var FilterNumbers = function(str) {
    return str.replace(/\d+/gi,'');
}

const FilterNumbers = s => s.split(/[0-9]/).join('')
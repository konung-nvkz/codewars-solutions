/*Reducing Problems - Bug Fixing #8
DESCRIPTION:
Reducing Problems - Bug Fixing #8
Oh no! Timmy's reduce is causing problems, 
Timmy's goal is to calculate the two teams scores and return the winner 
but timmy has gotten confused and sometimes teams don't enter their scores, 
total the scores out of 3! Help timmy fix his program!

Return true if team 1 wins or false if team 2 wins!
*/

function calculateTotal(team1, team2) {
    var t1s = team1.reduce((t, c) => t + c, 0); // we count the score of team 1
    var t2s = team2.reduce((t, c, i) => t + c, 0);// we count the score of team 1
    console.log(t1s, ':', t2s);
    return t1s > t2s;
}

console.log(calculateTotal([1,2,2],[1,0,0]));
console.log(calculateTotal([6,45,1],[1,55,0]));
console.log(calculateTotal([57,2,1],[1,0,0]));
console.log(calculateTotal([],[3,4,3]));

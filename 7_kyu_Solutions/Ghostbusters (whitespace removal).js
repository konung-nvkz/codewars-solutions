/*Ghostbusters (whitespace removal)
DESCRIPTION:
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.
So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!
Example:
ghostBusters("Sky scra per");
Should return:
"Skyscraper"
If the building contains no ghosts, return the string:
"You just wanted my autograph didn't you?"
*/

function ghostBusters(str) {
    //let length = str.length;
    let newStr = str.replace(/\s/g, ''); // regular expression where '\s' means space, /g means globaal search
    if (str.length === newStr.length) { // compare the length of string after removing spaces and the length of original string 
        return "You just wanted my autograph didn't you?" // if they are the same, return what asked
    } else {
        return newStr; // othervise return the changed string
    }
};
console.log(ghostBusters("Sky scra per"));
console.log(ghostBusters("Skyscraper"));
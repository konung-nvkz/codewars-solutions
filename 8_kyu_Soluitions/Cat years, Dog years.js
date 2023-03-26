/*Cat years, Dog years

Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
*/

var humanYearsCatYearsDogYears = function(humanYears) {
    switch(humanYears) { //in fact we have three cases
        case 1: //first is when one year has passed
            return [1,15,15];        
        case 2: //second is after two years
            return [2,24,24];   
        default: //all other cases are considered default, and we use the last variant
          return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];     
    } //to get the right answer we need to add (hY-2)*4 to 24 in order we want to get cY and (hY-2)*5 to 24 to get dY
}
console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(3));
console.log(humanYearsCatYearsDogYears(4));
console.log(humanYearsCatYearsDogYears(5));
console.log(humanYearsCatYearsDogYears(10));

//humanYears,catYears,dogYears
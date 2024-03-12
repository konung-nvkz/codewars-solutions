/*Cat Years, Dog Years (2)
This is related to my other Kata about cats and dogs.

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

Results are truncated whole numbers of "human" years
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

function ownedCatAndDog(catYears, dogYears) {
    let ownedCat, ownedDog;

    if (catYears < 15) {
        ownedCat = 0;
    } else if (catYears >= 15 && catYears < 24) {
        ownedCat = 1;
    } else if (catYears >= 24) {
        ownedCat = 2 + Math.floor((catYears - 24) / 4);
    }

    if (dogYears < 15) {
        ownedDog = 0;
    } else if (dogYears >= 15 && dogYears < 24) {
        ownedDog = 1;
    } else if (dogYears >= 24) {
        ownedDog = 2 + Math.floor((dogYears - 24) / 5);
    }

    return [ownedCat, ownedDog];
}
//test cases

console.log(ownedCatAndDog(45, 79)); // Expected output: [7,13]
console.log(ownedCatAndDog(10, 10)); // Expected output: [1, 1]
console.log(ownedCatAndDog(20, 20)); // Expected output: [2, 2]
console.log(ownedCatAndDog(30, 30)); // Expected output: [5, 6]
console.log(ownedCatAndDog(40, 40)); // Expected output: [8, 10]
console.log(ownedCatAndDog(50, 50)); // Expected output: [11, 14]

//A little bit shortened code with ternary:

var ownedCatAndDog = function(cat, dog) {
    return [cat < 15 ? 0 : cat < 24 ? 1 : (cat - 16) / 4 | 0,
            dog < 15 ? 0 : dog < 24 ? 1 : (dog - 14) / 5 | 0]
}

//And one more with map:
//The trick here is that input data are taken as an array, where catYears have index 0, and dogYears have index 1.
//What is more, the ages are united, as the difference appears only after 2 human years.

const ownedCatAndDog = (...pets) => pets.map((petYears, i) => { 
    if (petYears < 15) return 0;
    if (petYears < 24) return 1;
    
    return 2 + Math.floor((petYears - 24) / (4 + i));
});

/*Drink about
DESCRIPTION:
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/
function peopleWithAgeDrink(age) {
    if (age<14) return "drink toddy";
    if (age>=14 && age < 18) return "drink coke";
    if (age>=18 && age < 21) return "drink beer";
    else 
    return "drink whisky";
};
console.log(peopleWithAgeDrink(3));
console.log(peopleWithAgeDrink(15));
console.log(peopleWithAgeDrink(19));
console.log(peopleWithAgeDrink(33));